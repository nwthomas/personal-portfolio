import { useRouter } from 'next/router';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';
import { getArticleIds, getArticleById } from '../api';
import Layout from '../../components/Layout';
import Article from '../../components/Article';
import Error from '../../components/Error';
import { ARTICLE_IMAGE } from '../../components/Article/createNewArticleModule';

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

  const heroImage = data.modulesCollection.items.find(
    (module) => module.__typename === ARTICLE_IMAGE,
  )?.image?.url;

  const pageTitle = data.title;

  if (!isLoading && !error) {
    return (
      <Layout imageURL={heroImage} pageName={pageTitle} withFooter>
        <RootStyles>
          <Article articleModuleCollection={data.modulesCollection.items} />
        </RootStyles>
      </Layout>
    );
  }

  return (
    <Layout pageName="Oops" withEmojis>
      <Error errorCode="500" />
    </Layout>
  );
}

const RootStyles = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spaces.medium};
  width: 100%;
`;
