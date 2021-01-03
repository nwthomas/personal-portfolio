import { request, gql } from "graphql-request";

const contentfulDeliveryAccessToken =
  process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN;
const contentfulSpaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const baseUrl = "https://graphql.contentful.com";
const endpoint = `${baseUrl}/content/v1/spaces/${contentfulSpaceId}?access_token=${contentfulDeliveryAccessToken}`;

interface ArticleHeading {
  __typename: "ArticleHeading";
  sys: {
    id: string;
  };
  title: string;
  copy: string;
  isMainTitle?: boolean;
}

interface ArticleImage {
  __typename: "ArticleImage";
  sys: {
    id: string;
  };
  title: string;
  caption?: string;
  width: number;
  height: number;
  heroImage: boolean;
  inline: boolean;
  image: {
    sys: {
      id: string;
    };
    url: string;
  };
}

interface ArticleBodyCopy {
  __typename: "ArticleBodyCopy";
  sys: {
    id: string;
  };
  title: string;
  copy: string;
}

interface ArticleQuote {
  __typename: "ArticleQuote";
  sys: {
    id: string;
  };
  title: string;
  copy: string;
  attribution: string;
}

interface ArticleCodeSnippets {
  __typename: "ArticleCodeSnippets";
  sys: {
    id: string;
  };
  title: string;
  contents: string;
}

export type ArticleModulesCollectionTypes =
  | ArticleHeading
  | ArticleImage
  | ArticleBodyCopy
  | ArticleQuote
  | ArticleCodeSnippets;

export type ArticleModulesCollection = Array<ArticleModulesCollectionTypes>;

export interface Article {
  __typename: "Article";
  sys: {
    id: string;
    firstPublishedAt: string;
    publishedAt: string;
  };
  title: string;
  slug: string;
  categoriesCollection?: {
    items: Array<{ title: string }>;
  };
  modulesCollection: {
    __typename: "ArticlesModulesCollection";
    items: ArticleModulesCollection;
  };
}

// Queries an article by ID
export async function useArticleById(articleId: string) {
  const { article } = await request(
    endpoint,
    gql`
      query GetArticleById($id: String!) {
        article(id: $id) {
          __typename
          sys {
            id
            firstPublishedAt
            publishedAt
          }
          title
          slug
          categoriesCollection {
            items {
              title
            }
          }
          modulesCollection {
            __typename
            items {
              ... on ArticleHeading {
                __typename
                sys {
                  id
                }
                title
                copy
                isMainTitle
              }
              ... on ArticleImage {
                __typename
                sys {
                  id
                }
                title
                caption
                width
                height
                heroImage
                inline
                image {
                  sys {
                    id
                  }
                  url
                }
              }
              ... on ArticleQuote {
                __typename
                sys {
                  id
                }
                title
                copy
                attribution
              }
              ... on ArticleBodyCopy {
                __typename
                sys {
                  id
                }
                title
                copy
              }
              ... on ArticleCodeSnippets {
                __typename
                sys {
                  id
                }
                title
                contents
                javascript
                python
                shell
                typescript
              }
            }
          }
        }
      }
    `,
    { id: articleId }
  );

  return article;
}

// Queries previews of all articles
export async function useArticlesPreview() {
  const { articleCollection } = await request(
    endpoint,
    gql`
      query {
        articleCollection {
          __typename
          items {
            __typename
            sys {
              id
              firstPublishedAt
              publishedAt
            }
            title
            slug
            description
            categoriesCollection {
              __typename
              items {
                sys {
                  id
                }
                title
                slug
              }
            }
          }
        }
      }
    `
  );

  return articleCollection;
}
