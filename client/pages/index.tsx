import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import LineBreak from "../components/LineBreak";
import styles from "../styles/pageModules/Home.module.scss";

const PAGE_NAME = "Home";

export default function Home() {
  return (
    <Layout pageName={PAGE_NAME}>
      <main className={styles.root}>
        <div>
          <h3>
            I'm Nathan Thomas, a full stack software engineer, writer, reader,
            runner, instructor, speaker, and investor
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
              <a href="https://www.twitter.com/nwthomas_">
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
          </h3>
        </div>
        <LineBreak />
      </main>
    </Layout>
  );
}
