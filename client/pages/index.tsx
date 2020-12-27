import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import TopicTag from "../components/TopicTag";
import styles from "../styles/pageModules/Home.module.scss";

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
  return (
    <Layout pageName={PAGE_NAME}>
      <main className={styles.root}>
        <div>
          <h2>
            I'm Nathan Thomas, a software engineer
            <span>
              <a href="https://reactjs.org/">
                <Image
                  alt="React logo"
                  draggable={false}
                  height={100}
                  quality={100}
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
                  src="/twitter-logo-blue.png"
                  width={263}
                />
              </a>
            </span>
            in San Francisco, California.
          </h2>
          <div className={styles.content}>
            <div className={styles.article__previews}>
              <h3>Latest Posts</h3>
              <p>Building Your First GraphQL Server</p>
            </div>
            <div className={styles.content__sidebar}>
              <h3>Top Categories</h3>
              <div className={styles.tag__area}>
                {categories.map((category) => (
                  <TopicTag name={category} route={category} />
                ))}
              </div>
              <div className={styles.popular__posts}>
                <h3>Popular Posts</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
