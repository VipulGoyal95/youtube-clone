import React, { useEffect, useState } from "react";
import "./sideVideo.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import { useNavigate } from "react-router-dom";

const SideVideo = ({ video }) => {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const {
    snippet: { thumbnails, channelTitle, publishedAt, title },
    id: { videoId },
  } = video;
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const navigate = useNavigate();

  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        const {
          data: { items },
        } = await request.get("/videos", {
          params: {
            part: "contentDetails,statistics",
            id: videoId,
          },
        });
        // console.log(items[0].statistics);
        setViews(items[0].statistics.viewCount);
        setDuration(items[0].contentDetails.duration);
        // console.log(items);
      } catch (error) {
        console.log(error);
      }
    };

    getVideoDetails();
  }, [videoId]);

  const handleVideo=()=>{
    navigate("/watch/"+videoId);
  }
  return (
    <div className="video-box" onClick={handleVideo}>
      <div className="image-container">
        <LazyLoadImage
          src={thumbnails.medium.url}
          effect="blur"
          alt="thumbail"
        />
        <span className="side-v-duration">{_duration}</span>
      </div>
      <div className="info">
        <span className="title">
          {title}
        </span>
        <span className="channel-name">{channelTitle}</span>
        <div>
          <span>{numeral(views).format("0.a")} views</span>
          <span>
            •
            {moment(publishedAt).fromNow() === "a day ago"
              ? "1 day ago"
              : moment(publishedAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideVideo;
