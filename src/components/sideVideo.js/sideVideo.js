import React from "react";
import "./sideVideo.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import numeral from "numeral";

const SideVideo = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <div className="video-box">
      <div className="image-container">
        <LazyLoadImage
          src="https://i.ytimg.com/vi/C6R6cbWeuow/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBEgoJ9DXGxngyO5hjn8MxxnuLA7w"
          effect="blur"
          alt="thumbail"
        />
        <span className="side-v-duration">{_duration}</span>
      </div>
      <div className="info">
        <span className="title">
          Testing Samsung S24 Ultra...Will it Survive?
        </span>
        <span className="channel-name">MR.INDIAN HACKER</span>
        <div>
          <span>{numeral("10000000").format("0.a")} views</span>
          <span>
            •
            {moment("02-04-2024").fromNow() === "a day ago"
              ? "1 day ago"
              : moment("02-04-2024").fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideVideo;
