import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const baseEndpoint = "https://graphql.contentful.com";

export function useCategories() {
  const endpoint = `${baseEndpoint}/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN}`;

  return useQuery("categories", async () => {
    const {
      categoryCollection: { items: data },
    } = await request(
      endpoint,
      gql`
        query {
          categoryCollection {
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
      `
    );

    return data;
  });
}
