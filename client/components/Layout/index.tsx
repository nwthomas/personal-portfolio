import React, { ReactElement } from "react";
import Head from "next/head";
import Footer from "../Footer";
import styles from "./Layout.module.scss";

interface Props {
  children: ReactElement;
  pageName: string;
}

function Layout(props: Props) {
  const { children, pageName } = props;

  return (
    <div className={styles.root}>
      <Head>
        <title>{pageName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
