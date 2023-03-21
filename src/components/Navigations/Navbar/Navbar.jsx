import React from "react"
import NavButton from "../Nav-buttons/Nav-buttons"
import style from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={style.nav}>
      Logo
      <div className={style.wrapper}>
        <NavButton link={"/"} title="Dashboard" />
        <NavButton link={"/form"} title="Form" />
        <NavButton link={"/report"} title="Report" />
      </div>
    </div>
  )
}

export default Navbar
