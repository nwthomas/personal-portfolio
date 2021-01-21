import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Layout from "../../components/Layout";
import { getArticlePreviews } from "../../api";
import ArticlePreviewCard from "../../components/ArticlePreviewCard";
import styled from "styled-components";

const PAGE_NAME = "Posts";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("articlePreviews", getArticlePreviews);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Posts() {
  const { data, error, isFetching } = useQuery(
    "articlePreviews",
    getArticlePreviews
  );

  return (
    <Layout pageName={PAGE_NAME} withFooter>
      <RootStyles>
        <div>
          {!isFetching && !error && data.items.length >= 1
            ? data.items.map(
                ({ categoriesCollection, description, sys: { id }, title }) => {
                  const articleCategories = categoriesCollection?.items
                    ? categoriesCollection.items.map(
                        (category) => category.title
                      )
                    : undefined;

                  return (
                    <ArticlePreviewCard
                      articleId={id}
                      description={description}
                      key={title}
                      title={title}
                      categories={articleCategories || []}
                      withBackground
                    />
                  );
                }
              )
            : null}
        </div>
      </RootStyles>
    </Layout>
  );
}

const RootStyles = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 3%;
  width: 100%;

  > div {
    display: flex;
    flex-wrap: wrap;
    max-width: 1400px;
    width: 100%;
  }
`;
