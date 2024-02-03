import React from "react";
import "./sideVideo.scss";

const SideVideo = () => {
  return (
    <div className="video-box">
      <img
        src="https://i.ytimg.com/vi/C6R6cbWeuow/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBEgoJ9DXGxngyO5hjn8MxxnuLA7w"
        alt="thumbail"
      />
      <div className="info">
        <span className="title">
          Testing Samsung S24 Ultra...Will it Survive?
        </span>
        <span className="channel-name">MR.INDIAN HACKER</span>
        <div>
          <span>5.3M views</span>
          <span>• 3 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default SideVideo;
