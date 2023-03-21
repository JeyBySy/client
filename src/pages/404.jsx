import React from "react"
import { NavLink } from "react-router-dom"
const NotFound = () => {
  return (
    <div style={{ height: "200px", display: "grid", placeItems: "center" }}>
      <p style={{ fontSize: "100px" }}>404</p>
      <p>Go back noob</p>
      <div style={{ display: "flex", gap: "1rem " }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  )
}

export default NotFound
