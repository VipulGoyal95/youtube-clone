import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchVideo } from "../../redux/slice/searchSlice";
import { useParams } from "react-router-dom";
import SearchVideo from "../../components/searchVideo/searchVideo";
import "./searchscreen.scss";
import { addHistoryVideo } from "../../redux/slice/historyVideoSlice";

const Searchscreen = () => {
  const { input } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchVideo(input));
  },[dispatch,input]);

  const { videos, loading } = useSelector((state) => state.searchVideo);
  const handleClick=(video)=>{
    dispatch(addHistoryVideo(video));
  }
  
  return (
    <div className="searchscreen-container">
      {!loading ? (
        videos.map((video) => <SearchVideo video={video} onClick={(video)=>handleClick(video)}/>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Searchscreen;
