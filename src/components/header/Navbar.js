import React from 'react'
import "./navbar.scss";
import { IoIosNotifications } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { MdApps } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import icon from "./youtube-icon.png";
const Navbar = () => {
  return (
    <div className="header border border-dark">
     <FaBars className="header -menu" size={20}/>
     <img src={icon} className="header -icon" alt=""/>

     <form>
      <input type="text" className="header -search" placeholder="Search" />
      <button type="submit">
        <FaSearch size={22} className='search-icon' />
      </button>
     </form>

     <div className="nav-icons">
      <IoIosNotifications size={24} className="icon"/>
      <MdApps size={24} className="icon" />
      <img src="https://w7.pngwing.com/pngs/87/237/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png" alt="" className="avatar-icon" />
     </div>
    </div>
  )
}

export default Navbar;
