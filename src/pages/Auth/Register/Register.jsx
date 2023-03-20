import React from "react"

const Register = () => {
  return (
    <div>
      <form action="">
        <label for="email">Email Address</label>
        <input id="email" type="text" name="email" />
        <label for="password">Password</label>
        <input id="password" type="password" name="password" />
        <div>
          <div className="showPassword">
            <input type="checkbox" name="showPassword" id="show_password" />
            <label for="show_password">Show Password</label>
          </div>
          <div>
            <label>Forgot Password?</label>
          </div>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Register
