import React from "react";
import "./sidebar.scss";
import { MdHome } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdSentimentDissatisfied } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logoutuser } from "../../redux/slice/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = () => {
    dispatch(logoutuser());
  };

  const handlehistory = () => {
    navigate("/history");
  };
  return (
    <nav className={"sidebar" + (props.showsidebar ? " hidebar" : "")}>
      <Link to="/">
        <li>
          <MdHome size={23} />
          <h6>Home</h6>
        </li>
      </Link>

      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={23} />
          <h6>Subscription</h6>
        </li>
      </Link>

      <Link to="/likedvideo">
        <li>
          <AiFillLike size={23} />
          <h6>Liked Video</h6>
        </li>
      </Link>

      <li onClick={handlehistory}>
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
      <li onClick={handlelogout}>
        <MdExitToApp size={23} />
        <h6>Logout</h6>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
