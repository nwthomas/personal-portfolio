import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import styles from "../styles/pageModules/Home.module.scss";

const PAGE_NAME = "Home";

export default function Home() {
  return (
    <Layout pageName={PAGE_NAME}>
      <Navbar />
      <main className={styles.root}>
        <div>
          <p>
            I'm Nathan Thomas, a software engineer, writer, reader, runner,
            instructor, speaker, and investor
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
          </p>
        </div>
      </main>
    </Layout>
  );
}
