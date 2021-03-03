import * as React from "react"
import Header from "./header"
import { Link } from "gatsby";
import { title } from './layout.module.css'

// markup
const Layout = ({heading, children}) => {
  return (
    <main>
        <Header />
        <h1 className={title}>{heading}</h1>
        { children }
        <Link to="/blog">
          Blog
        </Link>
    </main>
  )
}

export default Layout