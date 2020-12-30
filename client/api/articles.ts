import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const contentfulDeliveryAccessToken =
  process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN;
const contentfulSpaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const baseUrl = "https://graphql.contentful.com";
const endpoint = `${baseUrl}/content/v1/spaces/${contentfulSpaceId}?access_token=${contentfulDeliveryAccessToken}`;

// Fetches all articles
export function useArticles() {
  return useQuery("articles", async () => {
    const {
      articleCollection: { items: data },
    } = await request(
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
                  }
                  ... on ArticleImage {
                    __typename
                    sys {
                      id
                    }
                    title
                    caption
                    heroImage
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
                    javascript
                    python
                    shell
                    typescript
                  }
                }
              }
            }
          }
        }
      `
    );

    return data;
  });
}

// Fetches an article by ID
export function useArticleById(articleId: string) {
  // finish
}

// Fetches previews of all articles
export function useArticlesPreview() {
  return useQuery("articlePreviews", async () => {
    const {
      articleCollection: { items: data },
    } = await request(
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

    return data;
  });
}
