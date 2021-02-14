import { useRouter } from 'next/router';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';
import { getArticleIds, getArticleById } from '../../api';
import Layout from '../../components/Layout';
import Article from '../../components/Article';

export default function ArticleByName() {
  const router = useRouter();
  const { articleId }: { articleId?: string } = router.query;

  const { data, error, isLoading } = useQuery(['article', articleId], () =>
    getArticleById(articleId),
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

  return <p>Something went wrong</p>;
}

export async function getStaticProps(context) {
  const { articleId } = context.params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['article', articleId], () =>
    getArticleById(articleId),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export async function getStaticPaths() {
  const data = await getArticleIds();

  if (!data.items.length) {
    return {
      paths: [],
      fallback: false,
    };
  }

  return {
    paths: data.items.map(({ sys: { id } }) => ({ params: { articleId: id } })),
    fallback: false,
  };
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
