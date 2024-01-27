import React from 'react'
import "./login.scss";
import icon from "./youtube-logo.png";
import { useDispatch } from 'react-redux';
import { loginuser } from '../../redux/slice/userSlice';
// import {auth,provider} from "../../firebase";
// import { signInWithPopup } from "firebase/auth";


const Login = () => {
  const dispatch = useDispatch();

  const handlelogin =()=>{
      // try{
      //     const res = signInWithPopup(auth,provider);
      //     console.log(res);
      // }catch(err){
      //     console.log(err);
      // }
    dispatch(loginuser());
  }
  
  
  return (
    <div className="main-container">
      <div className="login-container">
        <img alt="logo" src={icon} />
        <button onClick={handlelogin}>Login with google</button>
        <p>This is a youtube clone</p>
      </div>
    </div>
  )
}

export default Login
