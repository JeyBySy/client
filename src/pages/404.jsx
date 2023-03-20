import React from "react"
import { NavLink } from "react-router-dom"
const NotFound = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1> <p>Here are some helpful links:</p>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}

export default NotFound
