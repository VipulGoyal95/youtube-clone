import React, { useEffect } from 'react'
import "./login.scss";
import icon from "./youtube-logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from '../../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector(state=>state.user.accessToken);
  useEffect(()=>{
    if (accessToken){
      navigate("/");
    }
  },[accessToken,navigate])
  

  const handlelogin =()=>{
    dispatch(loginuser());
  }
  
  
  return (
    <div className="login-outer-container">
      <div className="login-container">
        <img alt="logo" src={icon} />
        <button onClick={handlelogin}>Login with google</button>
        <p>This is a youtube clone</p>
      </div>
    </div>
  )
}

export default Login
