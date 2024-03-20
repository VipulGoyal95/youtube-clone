import React, { useEffect } from "react";
import "./likedvideoscreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { getLikedVideo } from "../../redux/slice/likedvideoSlice";
import SearchVideo from "../../components/searchVideo/searchVideo";

const Likedvideoscreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLikedVideo());
  },[dispatch]);

  const { video, loading } = useSelector((state) => state.likedVideo);
  return <div>{!loading && video.map((video) => <SearchVideo video={video}/>)}</div>;
};

export default Likedvideoscreen;
