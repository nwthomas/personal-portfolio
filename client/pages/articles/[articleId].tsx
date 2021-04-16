import { useRouter } from 'next/router';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';
import { getArticleIds, getArticleById } from '../api';
import Layout from '../../components/Layout';
import Article from '../../components/Article';
import { getRandomErrorPhrase } from '../../staticAssets';
import Error from '../../components/Error';

interface ArticleIdType {
  articleId?: string;
}

export async function getStaticProps(context) {
  const { articleId } = context.params;

  const queryClient = new QueryClient();

  function handleGetArticleByIdQuery() {
    return getArticleById(articleId);
  }

  await queryClient.prefetchQuery(
    ['article', articleId],
    handleGetArticleByIdQuery,
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export async function getStaticPaths() {
  const data = await getArticleIds();

  if (!data?.items?.length) {
    return {
      paths: [],
      fallback: false,
    };
  }

  return {
    // Pre-generates all possible article paths at build time
    paths: data.items.map(({ sys: { id } }) => ({ params: { articleId: id } })),
    fallback: false,
  };
}

export default function ArticleByName() {
  const router = useRouter();
  const { articleId }: ArticleIdType = router.query;

  function handleUseQuery() {
    return getArticleById(articleId);
  }

  const { data, error, isLoading } = useQuery(
    ['article', articleId],
    handleUseQuery,
  );

  const pageTitle = data.title;

  if (!isLoading && !error) {
    return (
      <Layout pageName={pageTitle} withFooter>
        <RootStyles>
          <Article articleModuleCollection={data.modulesCollection.items} />
        </RootStyles>
      </Layout>
    );
  }

  return (
    <Layout pageName="Oops" withEmojis>
      <Error errorCode="500" errorPhrase={getRandomErrorPhrase()} />
    </Layout>
  );
}

const RootStyles = styled.main`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spaces.jumbo};
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    padding: 0;
  }
`;
