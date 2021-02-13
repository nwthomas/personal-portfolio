import React from "react";
import { useRouter } from "next/router";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import CategoryArticleSection from "../../../components/CategoryArticleSection";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
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
    data: articlesData,
    error: articlesError,
    isFetching: isFetchingArticles,
  } = useQuery("articlePreviews", getArticlePreviews);
  const {
    data: categoriesData,
    error: categoriesError,
    isFetching: isFetchingCategories,
  } = useQuery("categories", getCategories);

  return (
    <Layout pageName={"TEST"} withEmojis withFooter>
      <RootStyles>
        <PageTitle title="TEST" type="2" />
      </RootStyles>
    </Layout>
  );
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
