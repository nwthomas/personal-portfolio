import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Layout.module.scss";

interface Props {
  children: ReactNode | Array<ReactNode>;
  pageName: string;
}

export default function Layout(props: Props) {
  const { children, pageName } = props;

  return (
    <>
      <Navbar />
      <div className={styles.root}>
        <Head>
          <title>{`${pageName} | Nathan Thomas`}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
        <Footer />
      </div>
    </>
  );
}
