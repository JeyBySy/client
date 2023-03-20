import React from "react"
import NavButton from "../Nav-buttons/Nav-buttons"
import style from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <>
      <div className={style.nav}>
        <NavButton />
      </div>
    </>
  )
}

export default Navbar
