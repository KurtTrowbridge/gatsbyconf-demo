import * as React from "react"
import { Link } from "gatsby";

// markup
const myComponent = () => {
  return (
    <main>
      <title>About</title>
      <h1>
        About my site
      </h1>
      <p>It's beautiful.</p>
      <Link to="/">Go home</Link>
    </main>
  )
}

export default myComponent
