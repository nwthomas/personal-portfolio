import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/pageModules/Home.module.scss";

const PAGE_NAME = "Talks";

export default function Talks() {
  return (
    <Layout pageName={PAGE_NAME}>
      <main className={styles.root}></main>
    </Layout>
  );
}
