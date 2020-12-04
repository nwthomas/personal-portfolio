import React, { ReactNode } from "react";
import BabyYodaEasterEgg from "../BabyYodaEasterEgg";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Layout.module.scss";

interface Props {
  children: ReactNode | Array<ReactNode>;
  pageName: string;
}

export default function Layout({ children, pageName }: Props) {
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
        <BabyYodaEasterEgg />
      </div>
    </>
  );
}
