import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        { data.allFile.nodes.map(node => {
          return (
            <li key={node.name}>
              {node.name}
              {/* <Link to={`${node.path}`}>{node.name}</Link> */}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query BlogPosts {
    allFile(filter: { dir: { regex: "/blog/" } }) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage