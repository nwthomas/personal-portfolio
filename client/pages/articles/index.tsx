import styled from 'styled-components';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Layout from '../../components/Layout';
import { getArticlePreviews, getCategories } from '../api';
import type { ArticlePreviewType } from '../api/articles';
import CategoryList from '../../components/CategoryList';
import CategoryArticleSection from '../../components/CategoryArticleSection';
import { useLayoutCategoryArticlePreviews } from '../../hooks/useLayoutCategoryArticlePreviews';
import Error from '../../components/Error';

const PAGE_NAME = 'Articles';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('articlePreviews', getArticlePreviews);
  await queryClient.prefetchQuery('categories', getCategories);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function ArticlesPage() {
  const {
    data: { items: articlesData },
    error: articlesError,
    isFetching: isFetchingArticles,
  } = useQuery('articlePreviews', getArticlePreviews);
  const {
    data: { items: categoriesData },
    error: categoriesError,
    isFetching: isFetchingCategories,
  } = useQuery('categories', getCategories);

  if (isFetchingArticles || isFetchingCategories) {
    return null;
  }

  if (
    !articlesError &&
    !categoriesError &&
    articlesData.length >= 1 &&
    categoriesData.length >= 1
  ) {
    const categorizedArticles = useLayoutCategoryArticlePreviews(
      categoriesData,
      articlesData,
    );

    const categorizedArticlesArray: Array<
      [string, Array<ArticlePreviewType>]
    > = Object.entries(categorizedArticles);

    return (
      <Layout pageName={PAGE_NAME} withEmojis withFooter>
        <RootStyles>
          <div>
            <div>
              <h2>Articles</h2>
            </div>
            {categorizedArticlesArray.map(([category, articles], i) => {
              if (!articles.length) {
                return null;
              }

              return (
                <div key={i}>
                  <CategoryArticleSection
                    articles={articles}
                    categoryName={category}
                    withTopicTag
                  />
                </div>
              );
            })}
          </div>
          <CategoryList categories={categoriesData} />
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
  padding: ${({ theme }) =>
    `0 ${theme.appDimensions.appHorizontalGutters} ${theme.spaces.xxLarge}`};
  width: 100%;

  > div {
    max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
    padding: ${({ theme }) => theme.spaces.medium} 0 0;
    width: 100%;

    > div {
      padding-bottom: ${({ theme }) => theme.spaces.micro};
    }
  }
`;

export default ArticlesPage;
