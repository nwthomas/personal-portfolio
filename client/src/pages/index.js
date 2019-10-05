import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="This is the portfolio site for Nathan Thomas, software engineer, musician, amateur musician, and Italian food fan."
      lang="en"
    />
    <h1>Home Page</h1>
  </Layout>
);

export default IndexPage;
