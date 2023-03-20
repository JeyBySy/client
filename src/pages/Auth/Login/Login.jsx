import React from "react"
import style from "./Login.module.scss"

const Login = () => {
  return (
    <main>
      <div className={style.content}>
        <p className={style.logo}>Formiva</p>
        <p>Sign-in</p>
        <form action="">
          <label for="email">Email Address</label>
          <input id="email" type="text" name="email" />
          <label for="password">Password</label>
          <input id="password" type="password" name="password" />
          <div className={style.jc_flex}>
            <div className="showPassword">
              <input type="checkbox" name="showPassword" id="show_password" />
              <label for="show_password">Show Password</label>
            </div>
            <div className={style.forgotPassword}>
              <label>Forgot Password?</label>
            </div>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </main>
  )
}

export default Login
