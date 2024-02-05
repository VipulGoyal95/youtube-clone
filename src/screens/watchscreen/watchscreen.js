import React from "react";
import "./watchscreen.scss";

import SideVideo from "../../components/sideVideo.js/sideVideo";
import Metadata from "../../components/metadata/metadata";
import Comments from "../../components/comments/comments";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import request from "../../api";
// import { SmallcategoryBar } from "../../components/categoriesbar/CategoriesBar";

const Watchscreen = () => {
  const { id } = useParams();
  

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
        <Metadata />
        <Comments />
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
