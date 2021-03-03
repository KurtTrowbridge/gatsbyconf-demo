import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";

// markup
const myComponent = () => {
  return (
    <Layout heading="About my site">
        <p>It's <em>beautiful</em>.</p>
        <Link to="/">Go home</Link>
    </Layout>
  )
}

export default myComponent
