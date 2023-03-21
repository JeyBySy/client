import React from "react"
import { NavLink } from "react-router-dom"
import style from "./Nav-buttons.module.scss"

const NavButton = ({ link, title }) => {
  return (
    <>
      <NavLink
        to={link}
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? style.active : style.pending
        }
      >
        {title}
      </NavLink>
    </>
  )
}

export default NavButton
