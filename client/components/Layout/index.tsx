import React, { ReactElement } from "react";
import Head from "next/head";
import Footer from "../Footer";
import usePageName from "../../hooks/usePageName";
import styles from "./Layout.module.scss";
import { PAGE_PHRASES, PAGE_PHRASES_INTERVAL_TIME } from "./constants";

interface Props {
  children: ReactElement;
  pageName: string;
}

function Layout(props: Props) {
  const { children, pageName } = props;

  const finalPageName = usePageName(
    pageName,
    PAGE_PHRASES,
    PAGE_PHRASES_INTERVAL_TIME
  );

  return (
    <div className={styles.root}>
      <Head>
        <title>{finalPageName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
