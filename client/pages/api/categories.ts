import { request, gql } from 'graphql-request';

const contentfulDeliveryAccessToken = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN;
const contentfulSpaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const baseUrl = 'https://graphql.contentful.com';
const endpoint = `${baseUrl}/content/v1/spaces/${contentfulSpaceId}?access_token=${contentfulDeliveryAccessToken}`;

export interface CategoryType {
  sys: {
    id: string;
  };
  title: string;
  slug: string;
}

export interface CategoryCollectionType {
  __typename: 'CategoryCollection';
  items: Array<CategoryType>;
}

// Queries all categories in use in the app
export async function getCategories() {
  const { categoryCollection } = await request(
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
    `,
  );

  return categoryCollection;
}
