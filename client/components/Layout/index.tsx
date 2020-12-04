import React, { ReactNode } from "react";
import BabyYodaEasterEgg from "../BabyYodaEasterEgg";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import usePageName from "../../hooks/usePageName";
import styles from "./Layout.module.scss";

interface Props {
  children: ReactNode | Array<ReactNode>;
  pageName: string;
}

export default function Layout({ children, pageName }: Props) {
  const [currentPageName] = usePageName(pageName);

  return (
    <>
      <Navbar />
      <div className={styles.root}>
        <Head>
          <title>{currentPageName}</title>
          <link rel="icon" href="/favicon.ico" />

          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
          <script src="https://cdn.spline.design/lib/spline.runtime.min.js"></script> */}
        </Head>
        {children}
        <Footer />
        <BabyYodaEasterEgg />
      </div>
    </>
  );
}
