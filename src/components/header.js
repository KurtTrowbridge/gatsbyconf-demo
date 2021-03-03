import * as React from "react";
import { title } from "./layout.module.css";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <header>{data.site.siteMetadata.title}</header>;
};

export default Header;
