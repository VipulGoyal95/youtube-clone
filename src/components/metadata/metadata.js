import React, { useState, useEffect } from "react";
import { PiShareFat } from "react-icons/pi";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { LiaDownloadSolid } from "react-icons/lia";
import { LuListPlus } from "react-icons/lu";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import "./metadata.scss";
import moment from "moment";
import numeral from "numeral";
import { useParams } from "react-router-dom";
// import request from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSubscriptiondetails,
  getSubscriptiondetails,
  getchanneldata,
  updateSubscriptiondetails,
} from "../../redux/slice/channelSlice";
import DOMPurify from "dompurify";
import ReactLinkify from "react-linkify";
// import { useSelector } from "react-redux";

const Metadata = ({ video }) => {
  const [toggleoptions, setToggleoptions] = useState(false);
  const [show, setShow] = useState(false);
  // const [views, setViews] = useState();
  // const [likes, setLikes] = useState();
  const dispatch = useDispatch();
  // const { id } = useParams();
  const {
    statistics: { viewCount, likeCount },
    snippet: { title, description, publishedAt, channelId },
  } = video;
  // console.log(selectedVideo);
  // console.log(viewCount);

  // useEffect(() => {
  //   const getdetails = async () => {
  //     try {
  //       const {
  //         data: { items },
  //       } = await request.get("/videos", {
  //         params: {
  //           part: "snippet,statistics",
  //           id: id,
  //         },
  //       });
  //       setViews(items[0].statistics.viewCount);
  //       setDate(items[0].snippet.publishedAt);
  //       setLikes(items[0].statistics.likeCount);
  //       setChannelid(items[0].snippet.channelId);
  //       setVideoTitle(items[0].snippet.title);
  //       setDescription(items[0].snippet.description);
  //       console.log(likes);
  //       console.log(views);
  //       console.log(date);
  //       // console.log(items[0]);
  //       console.log(channelid);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getdetails();
  // }, [id, date, views, likes, channelid]);

  useEffect(() => {
    dispatch(getchanneldata(channelId));
    console.log("hello");
    dispatch(getSubscriptiondetails(channelId));
  }, [channelId, dispatch]);

  const { channel } = useSelector((state) => state.channel);
  const { subscriptionStatus } = useSelector((state) => state.channel);

  if (channel) {
    var {
      snippet: {
        title: channeltitle,
        thumbnails: { medium: channellogo },
      },
      statistics: { subscriberCount },
    } = channel;
  }
  const handleshow = () => {
    setShow(!show);
  };
  // console.log(toggleoptions);
  const handletoggle = () => {
    setToggleoptions(!toggleoptions);
  };
  // const sanitizedDescription = DOMPurify.sanitize(description);
  // console.log(description);
  const handleSubscription = () => {
    if(subscriptionStatus===false){
      dispatch(updateSubscriptiondetails(channelId));
    }
    else{
      dispatch(deleteSubscriptiondetails())
    }
  }

  return (
    <>
      <span className="video-title">{title}</span>
      <div className="channel">
        <div className="channel__left">
          <img src={channellogo ? channellogo.url : ""} alt="logo" />
          <div className="channel__left__info">
            <span className="channel__left__info__name">{channeltitle}</span>
            <span className="channel__left__info__subscribers">
              {numeral(subscriberCount).format("0.a")} subscribers
            </span>
          </div>
          <button
            className={subscriptionStatus ? "subscribed-btn" : "subscribe-btn"}
          onClick={handleSubscription}>
            {subscriptionStatus ? "Subscribed" : "Subscribe"}
          </button>
        </div>

        <div className="channel__right">
          <button className="like">
            <FiThumbsUp /> {numeral(likeCount).format("0.a")}
          </button>
          <button className="unlike">
            <FiThumbsDown />
          </button>
          <button className="share-btn">
            <PiShareFat />
            Share
          </button>
          <button className="Download">Download</button>
          <button className="more-options" onClick={handletoggle}>
            <BsThreeDots />
          </button>
        </div>
      </div>
      <div className={toggleoptions ? "active" : "hide"}>
        <div className="hidedownload">
          <button>
            <LiaDownloadSolid />
            Download
          </button>
        </div>
        <div>
          <button className="">
            <LuListPlus />
            Save
          </button>
        </div>
        <div>
          <button className="">
            <MdOutlineOutlinedFlag />
            Report
          </button>
        </div>
      </div>
      <div className="discription">
        <div>
          <span className="view-count">
            {numeral(viewCount).format("0.a")} views
          </span>
          <span className="time">
            {moment(publishedAt).fromNow() === "a day ago"
              ? "1 day ago"
              : moment(publishedAt).fromNow()}
          </span>
        </div>
        <div
          className={show ? "discription-area-show" : "discription-area-hide"}
        >
          <ReactLinkify>{description}</ReactLinkify>
        </div>
        <span className="show-handler" onClick={handleshow}>
          Show {show ? "less" : "more"}
        </span>
      </div>
    </>
  );
};

export default Metadata;
