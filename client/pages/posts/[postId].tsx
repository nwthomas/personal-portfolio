import React from "react";
import { useRouter } from "next/router";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { useArticleById } from "../../api";
import Layout from "../../components/Layout";
import Article from "../../components/Article";
import styled from "styled-components";

export async function getServerSideProps(context) {
  const { postId } = context.params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["articles", postId], () =>
    useArticleById(postId)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Post() {
  const router = useRouter();
  const { postId }: { postId?: string } = router.query;

  const { data, error, isLoading } = useQuery(["articles", postId], () =>
    useArticleById(postId)
  );

  if (!isLoading && !error && data?.modulesCollection?.items.length) {
    const pageTitle = data?.title;
    return (
      <Layout pageName={pageTitle} withFooter>
        <RootStyles>
          <Article articleModuleCollection={data.modulesCollection.items} />
        </RootStyles>
      </Layout>
    );
  } else {
    return <p>Not Found</p>;
  }
}

const RootStyles = styled.main`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spaces.xLarge};
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    padding: 0;
  }
`;
