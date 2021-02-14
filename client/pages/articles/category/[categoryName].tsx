import React from "react";
import { useRouter } from "next/router";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import CategoryArticleSection from "../../../components/CategoryArticleSection";
import { createCategoryRouteName } from "../../../components/TopicTag";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import type { ArticlePreviewType } from "../../../api/articles";
import { getArticlePreviews, getCategories } from "../../../api";
import styled from "styled-components";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("articlePreviews", getArticlePreviews);
  await queryClient.prefetchQuery("categories", getCategories);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function CategoryPage() {
  const {
    query: { categoryName },
  } = useRouter();

  const {
    data: articlesData,
    error: articlesError,
    isFetching: isFetchingArticles,
  } = useQuery("articlePreviews", getArticlePreviews);
  const {
    data: categoriesData,
    error: categoriesError,
    isFetching: isFetchingCategories,
  } = useQuery("categories", getCategories);

  const fullCategoryObject = categoriesData?.items?.find(
    (category) => category.slug === categoryName
  );

  if (
    !!articlesData &&
    !articlesError &&
    !isFetchingArticles &&
    !!categoriesData &&
    !categoriesError &&
    !isFetchingCategories &&
    !!fullCategoryObject
  ) {
    const fullCategoryName = fullCategoryObject.title;

    const articlesInCategoryArray = articlesData.items.reduce(
      (accum, article) => {
        const containsCategory = article.categoriesCollection.items.some(
          (category) => category.slug === categoryName
        );

        return containsCategory ? [...accum, article] : accum;
      },
      []
    );

    return (
      <Layout pageName={fullCategoryName} withEmojis withFooter>
        <RootStyles>
          <PageTitle title={fullCategoryName} type="2" />
          <CategoryArticleSection
            articles={articlesInCategoryArray}
            categoryName={fullCategoryName}
          />
        </RootStyles>
      </Layout>
    );
  } else {
    return <div />;
  }
}

const RootStyles = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spaces.small};
  margin-bottom: ${({ theme }) => theme.spaces.large};
  padding: 0 3%;
  width: 100%;

  > div {
    max-width: 1400px;
    width: 100%;
  }
`;
