import { useState } from "react";
import "./app.scss";
import Navbar from "./components/header/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";

const Layout =({Screen}) =>{
    const [showSidebar, setSidebar]= useState(false);
    const handletoggle =()=>{
      setSidebar(!showSidebar);
    }
  
    return(
      <div className="app">
        <Navbar setSidebar={handletoggle}/>
        <div className="app-container">
          <Sidebar showsidebar={showSidebar} setSidebar={handletoggle} />
          <Container fluid className="main-container">
            {Screen}
          </Container>
        </div>
      </div>
    )
}

export default Layout;