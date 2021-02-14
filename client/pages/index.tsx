import React, { createRef, useEffect, useRef } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import TopicTag from "../components/TopicTag";
import ArticlePreviewCard from "../components/ArticlePreviewCard";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import {
  getArticlePreviews,
  getCategories,
  getLastTweetFromTwitterProfile,
} from "../api";
import useGetPreferredTheme from "../hooks/useGetPreferredTheme";
import useCreateNewTweet from "../hooks/useCreateNewTweet";
import styled from "styled-components";

const PAGE_NAME = "Home";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("articlePreviews", getArticlePreviews);
  await queryClient.prefetchQuery("categories", getCategories);
  await queryClient.prefetchQuery(
    "recentTweet",
    getLastTweetFromTwitterProfile
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const [currentTheme] = useGetPreferredTheme();
  let tweetRef = useRef();

  const {
    data: { items: articlesData },
    error: articlesError,
    isFetching: isFetchingArticles,
  } = useQuery("articlePreviews", getArticlePreviews);
  const {
    data: { items: categoriesData },
    error: categoriesError,
    isFetching: isFetchingCategories,
  } = useQuery("categories", getCategories);
  const {
    data: tweetsData,
    error: tweetsError,
    isFetching: isFetchingTweets,
  } = useQuery("recentTweet", getLastTweetFromTwitterProfile);

  const finalArticlesData = articlesData?.slice(0, 4) || [];

  const { shouldUpdateTweet } = useCreateNewTweet(
    currentTheme,
    tweetRef.current,
    tweetsData?.data[0]?.id
  );

  useEffect(() => {
    // tweetRef = createRef(null);
  }, [currentTheme, tweetRef.current]);

  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles>
        <div>
          <section>
            <h2>
              I'm Nathan Thomas, a software engineer
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
              . I currently work at the bird company
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
              in San Francisco, California.
            </h2>
          </section>
          {!isFetchingArticles && !articlesError && articlesData.length >= 1 && (
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
                      />
                    );
                  }
                )}
              </div>
              <div>
                <h3>Article Categories</h3>
                <div>
                  {!isFetchingCategories &&
                    !categoriesError &&
                    categoriesData.map(({ title }) => {
                      return (
                        <div key={title}>
                          <TopicTag name={title} />
                        </div>
                      );
                    })}
                </div>
                <div>
                  <h3>Latest Tweet</h3>
                  <div ref={tweetRef} />
                </div>
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
    max-width: 1400px;
    width: 100%;

    > section {
      align-items: center;
      display: flex;
      margin: 50px 0 80px;
      width: 100%;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.mobile}) {
        margin: 80px 0;
      }

      > h2 {
        font-size: 2.5rem;
        max-width: 100%;

        @media only screen and (min-width: 600px) {
          font-size: 3rem;
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

    @media only screen and (min-width: 600px) {
      display: block;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 50px;
      width: 100%;

      > div {
        margin-bottom: ${({ theme }) => theme.spaces.small};
        margin-right: ${({ theme }) => theme.spaces.small};
      }
    }

    > div:last-child {
      display: none;

      @media only screen and (min-width: 1000px) {
        display: block;
      }
    }
  }
`;
