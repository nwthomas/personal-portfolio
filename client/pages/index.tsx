import { useContext } from 'react';
import { dehydrate } from 'react-query/hydration';
import Image from 'next/image';
import Link from 'next/link';
import { QueryClient, useQuery } from 'react-query';
import styled, { ThemeContext } from 'styled-components';
import CategoryList from '../components/CategoryList';
import Layout from '../components/Layout';
import CategoryArticleSection from '../components/CategoryArticleSection';
import Tweet from '../components/Tweet';
import {
  getArticlePreviews,
  getCategories,
  getLastTweetFromTwitterProfile,
} from './api';

const PAGE_NAME = 'Home';

export async function getStaticProps() {
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

  const twitterLogo =
    currentTheme === 'light'
      ? '/twitter-logo-blue.png'
      : '/twitter-logo-white.png';
  const lambdaLogo =
    currentTheme === 'light' ? '/lambda-logo.png' : '/lambda-logo-white.png';

  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles>
        <div>
          <section>
            <div>
              <h2>
                I'm Nathan, a{' '}
                <a href="https://github.com/nwthomas">software engineer</a>,{' '}
                <Link href="/articles">writer</Link>, and{' '}
                <Link href="/presentations">instructor</Link>. I work at the{' '}
                <a href="https://twitter.com/nwthomas_">bird company</a> in San
                Francisco. 🌉
              </h2>
            </div>
            <div>
              <div>
                <h3>Currently:</h3>
                <a href="https://twitter.com/nwthomas_">
                  <Image
                    alt="Twitter logo"
                    draggable={false}
                    height={120}
                    quality={100}
                    priority
                    src={twitterLogo}
                    width={120}
                  />
                </a>
              </div>
              <div>
                <h3>Previously:</h3>
                <a href="https://lambdaschool.com/">
                  <Image
                    alt="Lambda logo"
                    draggable={false}
                    height={120}
                    quality={100}
                    priority
                    src={lambdaLogo}
                    width={349.5}
                  />
                </a>
              </div>
            </div>
          </section>
          {!isFetchingArticles &&
            !articlesError &&
            articlesData?.items.length >= 1 && (
              <Content>
                <div>
                  <h2>Latest Articles</h2>
                  <CategoryArticleSection articles={finalArticlesData} />
                </div>
                <div>
                  {!isFetchingCategories &&
                  !categoriesError &&
                  categoriesData?.items.length ? (
                    <CategoryList categories={categoriesData?.items} />
                  ) : null}
                </div>
                <div>
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
      flex-direction: column;
      margin-bottom: ${({ theme }) => theme.spaces.xLarge};
      padding: ${({ theme }) => theme.spaces.medium} 0 0;
      width: 100%;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.mobile}) {
        margin-bottom: ${({ theme }) => theme.spaces.medium};
      }

      > div {
        display: flex;
        flex-direction: column;
        width: 100%;

        @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.mobile}) {
          flex-direction: row;
        }

        > h2 {
          margin: ${({ theme }) => theme.spaces.medium} 0
            ${({ theme }) => `calc(${theme.spaces.xxLarge})`};
          max-width: 100%;

          @media only screen and (min-width: ${({ theme }) =>
              theme.breakpoints.mobile}) {
            width: 88%;
          }

          @media only screen and (min-width: ${({ theme }) =>
              theme.breakpoints.desktop}) {
            width: 820px;
          }

          a {
            color: ${({ theme }) => theme.colors.textAccentTwo};
            font-size: 3rem;
            transition: color ${({ theme }) => theme.transitions.medium}
              ease-in-out;

            &:hover {
              color: ${({ theme }) => theme.colors.textAccentThree};
            }
          }
        }

        > div:first-child {
          margin-bottom: ${({ theme }) => theme.spaces.medium};
          margin-right: 13%;
        }

        > div {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          height: 170px;
          justify-content: space-between;
          max-width: 350px;
          padding-bottom: ${({ theme }) => theme.spaces.nano};

          > a {
            transition: transform ${({ theme }) => theme.transitions.medium}
                ease-in-out,
              opacity ${({ theme }) => theme.transitions.medium} ease-in-out;

            &:hover {
              opacity: ${({ theme }) => theme.opacity.opacity80};
              transform: translateY(-1px);
            }
          }
        }
      }
    }
  }
`;

const Content = styled.div`
  > div {
    margin-bottom: ${({ theme }) => theme.spaces.xxLarge};
    width: 100%;
  }

  > div:last-child {
    margin: 0;
    width: 100%;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.desktop}) {
      width: 60%;
    }

    > div {
      display: block;
      padding-bottom: ${({ theme }) => theme.spaces.medium};
      width: 100%;

      > div {
        margin-bottom: ${({ theme }) => theme.spaces.small};
        margin-right: ${({ theme }) => theme.spaces.small};
      }
    }
  }
`;
