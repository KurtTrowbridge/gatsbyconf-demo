import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>

      <Layout heading="Hey">
        <p>This is my child.</p>
        <p>Hi there. We good now? Cool.</p>
        <Link to="/about">Go to the About page</Link>
      </Layout>
    </main>
  );
};

export default IndexPage;
