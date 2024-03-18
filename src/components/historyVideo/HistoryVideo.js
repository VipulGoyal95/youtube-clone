import React from "react";
import moment from "moment";
import numeral from "numeral";
import "./historyVideo.scss";

const HistoryVideo = () => {
  return (
    <div className="all-video-container">
      <div className="image">
        <img src="" alt="thumbnail" className="thumbnail-photo" />
        <span></span>
      </div>
      <div className="details">
        <span>What a wonderful video</span>
        <div className="video-data">
          <span>{numeral("1223456678").format("0.a")} views •</span>
          <span>
            {moment().fromNow() === "a day ago"
              ? "1 day ago"
              : moment().fromNow()}
          </span>
        </div>
        <div className="channel-data">
          <img className="channel-icon" src="" alt="logo" />
          <span>efefefefefefef</span>
        </div>
        <span className="short-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae, aperiam quos voluptatibus ipsam repudiandae commodi, modi nam nihil, fugit saepe? Aliquam maiores nemo numquam, debitis reprehenderit itaque quidem eveniet!</span>
      </div>
    </div>
  );
};

export default HistoryVideo;
