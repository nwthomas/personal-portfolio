import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const contentfulDeliveryAccessToken =
  process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN;
const contentfulSpaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const baseUrl = "https://graphql.contentful.com";
const endpoint = `${baseUrl}/content/v1/spaces/${contentfulSpaceId}?access_token=${contentfulDeliveryAccessToken}`;

// Queries all categories in use in the app
export function useCategories() {
  return useQuery("categories", async () => {
    const {
      categoryCollection: { items: data },
    } = await request(
      endpoint,
      gql`
        query {
          categoryCollection(order: title_ASC) {
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