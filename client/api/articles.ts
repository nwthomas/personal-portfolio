import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const baseEndpoint = "https://graphql.contentful.com";

export function useArticles() {
  const endpoint = `${baseEndpoint}/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN}`;

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
