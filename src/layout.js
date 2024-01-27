import { useState } from "react";
import "./app.scss";
import Navbar from "./components/header/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const Layout =({Screen}) =>{
    const [showSidebar, setSidebar]= useState(false);
    const handletoggle =()=>{
      setSidebar(!showSidebar);
    }
  
    return(
      <>
        <Navbar setSidebar={handletoggle}/>
        <div className="app-container">
          <Sidebar showsidebar={showSidebar} setSidebar={handletoggle} />
          <div className="main-container">
            {Screen}
          </div>
        </div>
      </>
    )
}

export default Layout;