import React, { useEffect, useState } from "react";
import "./channeldata.scss";
import request from "../../api";
import numeral from "numeral";

const Channeldata = ({ data }) => {
  const {
    thumbnails,
    title,
    description,
    resourceId: { channelId },
  } = data.snippet;
  const { totalItemCount } = data.contentDetails;
  const [subscribers, setSubscribers] = useState(null);
  const [customurl, setCustomurl] = useState(null);
  useEffect(() => {
    const getchanneldata = async () => {
      try {
        const {
          data: { items },
        } = await request.get("/channels", {
          params: {
            part: "snippet,statistics",
            id: channelId
          },
        });
        setCustomurl(items[0].snippet.customUrl);
        setSubscribers(items[0].statistics.subscriberCount);
      } catch (error) {
        console.log(error);
      }
    };
    getchanneldata();
  });
  return (
    <div className="container-body">
      <div className="image-container">
        <img src={thumbnails.medium.url} alt="" />
      </div>
      <div className="details">
        <span className="title">{title}</span>
        <span className="customurl">{customurl}</span>
        <div style={{ display: "flex" }}>
          <span className="videocount">{totalItemCount} videos</span>
          <span className="subscibers">
            • {numeral(subscribers).format("0.a")} subscibers
          </span>
        </div>
        <span className="description">{description}</span>
      </div>
    </div>
  );
};

export default Channeldata;
