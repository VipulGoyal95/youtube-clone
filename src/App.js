import Navbar from "./components/header/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
// import Container from 'react-bootstrap/Container';
import Homescreen from "./screens/homescreens/homescreen";
import "./app.scss";
import { useState } from "react";

function App() {
  const [showSidebar, setSidebar]= useState(false);
  const handletoggle =()=>{
    setSidebar(!showSidebar);
  }
  return (
    <>
      <Navbar setSidebar={handletoggle}/>
      <div className="app-container">
        <Sidebar showsidebar={showSidebar} setSidebar={handletoggle} />
        <div className="main-container">
        <Homescreen/>
        </div>

      </div>
      
    </>
  );
}

export default App;
