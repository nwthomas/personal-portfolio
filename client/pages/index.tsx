import { useContext } from 'react';
import { dehydrate } from 'react-query/hydration';
import Image from 'next/image';
import { QueryClient, useQuery } from 'react-query';
import styled, { ThemeContext } from 'styled-components';
import CategoryList from '../components/CategoryList';
import Layout from '../components/Layout';
import ArticlePreviewCard from '../components/ArticlePreviewCard';
import Tweet from '../components/Tweet';
import {
  getArticlePreviews,
  getCategories,
  getLastTweetFromTwitterProfile,
} from './api';

const PAGE_NAME = 'Home';

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('articlePreviews', getArticlePreviews);
  await queryClient.prefetchQuery('categories', getCategories);
  await queryClient.prefetchQuery(
    'recentTweet',
    getLastTweetFromTwitterProfile,
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { currentTheme } = useContext(ThemeContext);

  const {
    data: articlesData,
    error: articlesError,
    isFetching: isFetchingArticles,
  } = useQuery('articlePreviews', getArticlePreviews);
  const {
    data: categoriesData,
    error: categoriesError,
    isFetching: isFetchingCategories,
  } = useQuery('categories', getCategories);
  const { data: tweetsData } = useQuery(
    'recentTweet',
    getLastTweetFromTwitterProfile,
  );

  const finalArticlesData = articlesData?.items?.slice(0, 3) || [];
  const mostRecentTweetId = tweetsData?.data[0]?.id;

  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles>
        <div>
          <section>
            <h2>
              Hi. I'm Nathan, a software engineer
              <span>
                <a href="https://reactjs.org/">
                  <Image
                    alt="React logo"
                    draggable={false}
                    height={100}
                    quality={100}
                    priority
                    src="/react.png"
                    width={100}
                  />
                </a>
              </span>
              , reader, writer, musician
              <span>
                <a href="https://soundcloud.com/limbalring">
                  <Image
                    alt="Soundcloud logo"
                    draggable={false}
                    height={100}
                    quality={100}
                    priority
                    src="/soundcloud.png"
                    width={100}
                  />
                </a>
              </span>
              , instructor, speaker, and investor
              <span>
                <a href="https://bitcoin.org/bitcoin.pdf">
                  <Image
                    alt="Bitcoin logo"
                    draggable={false}
                    height={100}
                    quality={100}
                    priority
                    src="/bitcoin-logo.png"
                    width={100}
                  />
                </a>
              </span>
              . I work at the bird company
              <span>
                <a href="https://twitter.com/nwthomas_">
                  <Image
                    alt="Twitter logo"
                    draggable={false}
                    height={263}
                    quality={100}
                    priority
                    src="/twitter-logo-blue.png"
                    width={263}
                  />
                </a>
              </span>
              in San Francisco.
            </h2>
          </section>
          {!isFetchingArticles &&
            !articlesError &&
            articlesData?.items.length >= 1 && (
              <Content>
                <div>
                  <h3>Latest Articles</h3>
                  {finalArticlesData.map(
                    ({
                      categoriesCollection,
                      description,
                      sys: { id },
                      title,
                    }) => {
                      const articleCategories = categoriesCollection?.items
                        ? categoriesCollection.items.map(
                            (category) => category.title,
                          )
                        : undefined;

                      return (
                        <ArticlePreviewCard
                          articleId={id}
                          description={description}
                          key={title}
                          title={title}
                          categories={articleCategories || []}
                          withCategories
                        />
                      );
                    },
                  )}
                </div>
                <div>
                  {!isFetchingCategories &&
                  !categoriesError &&
                  categoriesData?.items.length ? (
                    <CategoryList categories={categoriesData?.items} />
                  ) : null}
                  {mostRecentTweetId ? (
                    <Tweet
                      currentTheme={currentTheme}
                      tweetId={mostRecentTweetId}
                    />
                  ) : null}
                </div>
              </Content>
            )}
        </div>
      </RootStyles>
    </Layout>
  );
}

const RootStyles = styled.main`
  align-items: center;
  flex-direction: column;
  display: flex;
  padding: 0 3%;
  width: 100%;

  > div {
    max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
    width: 100%;

    > section {
      align-items: center;
      display: flex;
      margin: ${({ theme }) => theme.spaces.medium} 0
        ${({ theme }) => `calc(${theme.spaces.medium} * 2)`};
      width: 100%;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.mobile}) {
        margin: ${({ theme }) => theme.spaces.medium} 0
          ${({ theme }) => `calc(${theme.spaces.large} * 2)`};
      }

      > h2 {
        font-size: 3rem;
        max-width: 100%;

        @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.desktop}) {
          max-width: 75%;
        }

        > span {
          display: inline-block;
          height: 30px;
          margin: 0 0 0 7px;
          width: 30px;

          > a {
            align-items: flex-end;
            display: flex;
            height: 30px;
            position: relative;
            transition: opacity ${({ theme }) => theme.transitions.short};

            > div {
              bottom: -5px;
              position: absolute;

              &:hover {
                opacity: ${({ theme }) => theme.opacity.opacity80};
              }
            }
          }
        }

        > span:first-child {
          margin-left: 5px;
        }

        > span:nth-child(3) {
          margin: 0 -3px 0 5px;
        }

        > span:last-child {
          margin: 0 7px;
        }
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 30px;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
  }

  > div:first-child {
    flex-grow: 2;
    margin-bottom: 30px;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      padding-right: 15%;
    }
  }

  > div:last-child {
    flex-grow: 1;
    max-width: 460px;
    width: 100%;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      display: block;
    }

    > div {
      display: none;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.desktop}) {
        display: block;
        margin-bottom: 50px;
        width: 100%;
      }

      > div {
        margin-bottom: ${({ theme }) => theme.spaces.small};
        margin-right: ${({ theme }) => theme.spaces.small};
      }
    }
  }
`;
