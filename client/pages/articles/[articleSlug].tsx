import { useRouter } from 'next/router';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';
import { getArticleIdsAndSlugs, getArticleById } from '../api';
import Layout from '../../components/Layout';
import Article from '../../components/Article';
import Error from '../../components/Error';
import { ARTICLE_IMAGE } from '../../components/Article/createNewArticleModule';

interface ArticleSlugType {
  articleSlug?: string;
}

export async function getStaticProps(context) {
  const { articleSlug } = context.params;

  // TODO - Cleanup this implementation with single dehydrated query instead of querying twice
  const queryClient = new QueryClient();
  const articleIdsAndSlugsData = await getArticleIdsAndSlugs();
  const currentArticle = articleIdsAndSlugsData?.items?.find((article) => {
    return article.slug === articleSlug;
  });
  const currentArticleId = currentArticle?.sys?.id;

  function handleGetArticleByIdQuery() {
    return getArticleById(currentArticleId);
  }

  await queryClient.prefetchQuery('articleIdsAndSlugs', getArticleIdsAndSlugs);
  await queryClient.prefetchQuery(
    ['article', currentArticleId],
    handleGetArticleByIdQuery,
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export async function getStaticPaths() {
  const articleIdsData = await getArticleIdsAndSlugs();

  if (!articleIdsData?.items?.length) {
    return {
      paths: [],
      fallback: false,
    };
  }

  return {
    // Pre-generates all possible article paths at build time
    paths: articleIdsData.items.map(({ slug }) => ({
      params: { articleSlug: slug },
    })),
    fallback: false,
  };
}

export default function ArticleByName() {
  const router = useRouter();
  const { articleSlug }: ArticleSlugType = router.query;

  const {
    data: idsAndSlugsData,
    error: idsAndSlugsError,
    isLoading: idsAndSlugsIsLoading,
  } = useQuery('articleIdsAndSlugs', getArticleIdsAndSlugs);

  const currentArticle = idsAndSlugsData?.items?.find((article) => {
    return article.slug === articleSlug;
  });
  const currentArticleId = currentArticle?.sys?.id;

  function handleGetArticleByIdQuery() {
    return getArticleById(currentArticleId);
  }

  const {
    data: articleData,
    error: articleError,
    isLoading: articleIsLoading,
  } = useQuery(['article', currentArticleId], handleGetArticleByIdQuery);

  if (
    !idsAndSlugsError &&
    !idsAndSlugsIsLoading &&
    idsAndSlugsData?.items.length > 0 &&
    !articleError &&
    !articleIsLoading &&
    articleData?.modulesCollection?.items.length > 0
  ) {
    const pageTitle = articleData.title;

    const heroImageURL = articleData.modulesCollection.items.find(
      (module) => module.__typename === ARTICLE_IMAGE,
    )?.image?.url;

    return (
      <Layout
        isArticle
        pageName={pageTitle}
        seoImageURL={heroImageURL}
        withFooter
      >
        <RootStyles>
          <Article
            articleModuleCollection={articleData.modulesCollection.items}
            readingTime={articleData.readingTime}
          />
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
