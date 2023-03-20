import React from "react"
import Navbar from "../../components/Navigations/Navbar/Navbar"
import style from "./MainLayout.module.scss"

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={style.wrapper}>
        <div className={style.content}>{children}</div>
      </div>
    </>
  )
}

export default MainLayout
