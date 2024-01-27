import React from 'react'
import "./login.scss";
import icon from "./youtube-logo.png";
const Login = () => {
  return (
    <div className="main-container">
      <div className="login-container">
        <img alt="logo" src={icon} />
        <button>Login with google</button>
        <p>This is a youtube clone</p>
      </div>
    </div>
  )
}

export default Login
