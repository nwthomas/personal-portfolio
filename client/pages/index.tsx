import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import TopicTag from "../components/TopicTag";
import ArticlePreviewCard from "../components/ArticlePreviewCard";
import { useArticlesPreview, useCategories } from "../api";
import styled from "styled-components";

const PAGE_NAME = "Home";

const categories = [
  "React",
  "Python",
  "GraphQL",
  "Infra",
  "Career",
  "Personal",
  "Soft Skills",
  "Mobile",
  "HTML",
  "CSS",
].sort((a, b) => (a < b ? -1 : 1));

export default function Home() {
  const {
    data: articlesData,
    error: articlesError,
    isFetching: isFetchingArticles,
  } = useArticlesPreview();
  const {
    data: categoriesData,
    error: categoriesError,
    isFetching: isFetchingCategories,
  } = useCategories();

  return (
    <Layout pageName={PAGE_NAME}>
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
                <h3>Latest Posts</h3>
                {articlesData.map(({ id, description, title }) => (
                  <ArticlePreviewCard
                    articleId={id}
                    description={description}
                    title={title}
                  />
                ))}
              </div>
              <div>
                <h3>Top Categories</h3>
                <div>
                  {!isFetchingCategories &&
                    !categoriesError &&
                    categoriesData.map(({ title }) => (
                      <TopicTag
                        name={title}
                        route={title.split(" ").join("-").toLowerCase()}
                        key={title}
                      />
                    ))}
                </div>
                <div>
                  <h3>Popular Posts</h3>
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

    > section > h2 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      max-width: 95%;

      @media only screen and (min-width: 600px) {
        font-size: 3rem;
        margin: 80px 0;
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 50px;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
  }

  > div:first-child {
    flex-grow: 2;
    margin-bottom: 30px;
  }

  > div:last-child {
    display: none;
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
    }

    > div:last-child {
      display: none;

      @media only screen and (min-width: 1000px) {
        display: block;
      }
    }
  }
`;
