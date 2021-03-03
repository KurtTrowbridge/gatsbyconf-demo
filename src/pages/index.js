import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image";


// markup
const IndexPage = () => {
  return (
    <Layout heading="Hey">
      <p>This is my child.</p>
      <p>Hi there. We good now? Cool.</p>
      <StaticImage src="https://images.unsplash.com/photo-1614626169098-380f51607eb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D" alt="painted stripes on a wall" />
      <Link to="/about">Go to the About page</Link>
  </Layout>
  );
};

export default IndexPage;
