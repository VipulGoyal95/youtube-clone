import React from 'react'
import "./sidebar.scss";
import { MdHome } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdSentimentDissatisfied } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";

const Sidebar = (props) => {
  console.log(props.showsidebar);
  return (
    <nav className={"sidebar"+(props.showsidebar?" hidebar":"")}>
      <li>
        <MdHome size={23} />
        <h6>Home</h6>
      </li>

      <li>
        <MdSubscriptions size={23} />
        <h6>Subscription</h6>
      </li>

      <li>
        <AiFillLike size={23} />
        <h6>Liked Video</h6>
      </li>

      <li>
        <FaClockRotateLeft size={23} />
        <h6>History</h6>
      </li>

      <li>
        <MdSentimentDissatisfied size={23} />
        <h6>I don't Know</h6>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <h6>Library</h6>
      </li>

      <hr />
      <li>
        <MdExitToApp size={23} />
        <h6>Logout</h6>      
      </li>
      <hr />
      
    </nav>
  )
}

export default Sidebar
