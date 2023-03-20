import React from "react"
import style from "./Nav-buttons.module.scss"

const NavButton = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.btn}>Dashboard</div>
      <div className={style.btn}>Forms</div>
      <div className={style.btn}>Reports</div>
    </div>
  )
}

export default NavButton
