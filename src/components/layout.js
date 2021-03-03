import * as React from "react"
import { title } from './layout.module.css'

// markup
const Layout = ({heading, children}) => {
  return (
    <main>
        <h1 className={title}>{heading}</h1>
        { children }
    </main>
  )
}

export default Layout
