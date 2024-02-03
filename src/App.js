// import Container from 'react-bootstrap/Container';
import Login from "./screens/login/login";
import "./app.scss";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Homescreen from "./screens/homescreens/homescreen";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
import Layout from "./layout";
import Watchscreen from "./screens/watchscreen/watchscreen";

function App() {
  // const { accessToken, loading } = useSelector((state) => state.user);
  // const navigate = useNavigate();

  // useEffect(()=>{
  //   if(!accessToken && !loading){
  //     navigate("/auth");
  //   }
  // },[accessToken,loading,navigate]);
  return (
    <Routes>
      <Route path="/" element={<Layout Screen={<Homescreen />} />} />
      <Route path="/auth" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/watch" element={<Layout Screen={<Watchscreen />} />} />
    </Routes>
  );
}

export default App;
