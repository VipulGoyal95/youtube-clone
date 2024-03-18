// import Container from 'react-bootstrap/Container';
import Login from "./screens/login/login";
import "./app.scss";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Homescreen from "./screens/homescreens/homescreen";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Layout from "./layout";
import Watchscreen from "./screens/watchscreen/watchscreen";
import Searchscreen from "./screens/searchscreen/searchscreen";
import Historyscreen from "./screens/historyscreen/historyscreen";
import Playlistscreen from "./screens/playlistscreen/playlistscreen";
import Subscriptionscreen from "./screens/subscriptionscreen/subscriptionscreen";
import Likedvideoscreen from "./screens/likedvideoscreen/likedvideoscreen";

function App() {
  const { accessToken, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!accessToken && !loading){
      navigate("/auth");
    }
  },[accessToken,loading,navigate]);
  
  return (
    <Routes>
      <Route path="/" element={<Layout Screen={<Homescreen />} />} />
      <Route path="/auth" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/watch/:id" element={<Layout Screen={<Watchscreen />} />} />
      <Route path="/search/:input" element={<Layout Screen={<Searchscreen />} />} />
      <Route path="/history" element={<Layout Screen={<Historyscreen/>}/>}/>
      <Route path="/playlist/:id" element={<Layout Screen={<Playlistscreen/>}/>}/>
      <Route path="/feed/subscriptions" element={<Layout Screen={<Subscriptionscreen />}/>}/>
      <Route path="/likedvideo" element={<Layout Screen={<Likedvideoscreen/>}/>}/>
    </Routes>
  );
}

export default App;
