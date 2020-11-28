import * as React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const PAGE_NAME = "Home";

export default function Home() {
  return (
    <Layout pageName={PAGE_NAME}>
      <Navbar />
    </Layout>
  );
}
