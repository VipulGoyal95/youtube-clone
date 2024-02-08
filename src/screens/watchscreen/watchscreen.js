import React, { useEffect } from "react";
import "./watchscreen.scss";

import SideVideo from "../../components/sideVideo.js/sideVideo";
import Metadata from "../../components/metadata/metadata";
import Comments from "../../components/comments/comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getselecteVideo } from "../../redux/slice/selectedVideoSlice";
import { getcomments } from "../../redux/slice/commentsSlice";


const Watchscreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getselecteVideo(id));
    dispatch(getcomments(id));
  },[dispatch,id]);
  const {selectedVideo ,loading} = useSelector(state=>state.selectedVideo);
  const {loading:commentLoading}= useSelector(state=>state.comments)

  return (
    <div className="watch-video-container">
      <div className="left">
        <div className="video">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="MY VIDEO"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading? <Metadata video={selectedVideo} />: <p>Loading...</p>}
        {!commentLoading? <Comments commentCount={selectedVideo.statistics.commentCount}/>: <p>Loading...</p>}
      </div>
      <div className="right">
        {[...Array(10)].map(() => (
          <SideVideo />
        ))}
      </div>
    </div>
  );
};

export default Watchscreen;
