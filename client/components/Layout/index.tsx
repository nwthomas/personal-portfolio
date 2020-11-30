import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import usePageName from "../../hooks/usePageName";
import styles from "./Layout.module.scss";

const PAGE_PHRASES = [
  "Pop it",
  "Drop it",
  "Lock it",
  "Load it",
  "Slide it",
  "Move it",
  "Touch it",
  "Code it",
];
const PAGE_PHRASES_INTERVAL_TIME = 1000;

interface Props {
  children: ReactNode | Array<ReactNode>;
  pageName: string;
}

export default function Layout({ children, pageName }: Props) {
  const finalPageName = usePageName(
    pageName,
    PAGE_PHRASES,
    PAGE_PHRASES_INTERVAL_TIME
  );

  return (
    <>
      <Navbar />
      <div className={styles.root}>
        <Head>
          <title>{finalPageName}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
        <Footer />
      </div>
    </>
  );
}
