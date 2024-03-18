import React, { useState } from 'react'
import "./navbar.scss";
import { IoIosNotifications } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { MdApps } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
// import icon from "./youtube-icon.png";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {

  const profile = useSelector(state=> state.user.user);
  const [input,setInput]=useState();
  const navigate = useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    if(input){
      navigate("/search/"+input);
    }
  }
  return (
    <div className="header">
     <FaBars className="header -menu" size={20} onClick={props.setSidebar} />
     <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" className="header -icon" alt=""/>

     <form onSubmit={handlesubmit}>
      <input type="text" className="header -search" placeholder="Search" onChange={(e)=>setInput(e.target.value)}/>
      <button type="submit">
        <FaSearch size={22} className='search-icon' />
      </button>
     </form>

     <div className="nav-icons">
      <IoIosNotifications size={24} className="icon"/>
      <MdApps size={24} className="icon" />
      <img src={profile? profile.photoURL : ""} alt="" className="avatar-icon" />
     </div>
    </div>
  )
}

export default Navbar;
