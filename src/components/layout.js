import * as React from "react"
import { title } from './layout.module.css'

// markup
const Layout = ({heading, children}) => {
  return (
    <>
        <h1 className={title}>{heading}</h1>
        { children }
    </>
  )
}

export default Layout
