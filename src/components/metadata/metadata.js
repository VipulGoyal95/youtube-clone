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
import request from "../../api";

const Metadata = () => {
  const [toggleoptions, setToggleoptions] = useState(false);
  const [show, setShow] = useState(false);
  const [views, setViews] = useState();
  const [likes, setLikes] = useState();
  const { id } = useParams();
  const [date, setDate] = useState();
  const [channelid, setChannelid] = useState();
  const [channelLogo, setChannellogo] = useState();
  const [channelname, setChannelname] = useState();
  const [subscribers, setSubscribers] = useState();
  const [videoTitle, setVideoTitle] = useState();
  const [description,setDescription] =useState();
  console.log(id);
  useEffect(() => {
    const getdetails = async () => {
      try {
        const {
          data: { items },
        } = await request.get("/videos", {
          params: {
            part: "snippet,statistics",
            id: id,
          },
        });
        setViews(items[0].statistics.viewCount);
        setDate(items[0].snippet.publishedAt);
        setLikes(items[0].statistics.likeCount);
        setChannelid(items[0].snippet.channelId);
        setVideoTitle(items[0].snippet.title);
        setDescription(items[0].snippet.description);
        console.log(likes);
        console.log(views);
        console.log(date);
        console.log(items[0]);
        console.log(channelid);
      } catch (error) {
        console.log(error);
      }
    };

    getdetails();
  }, [id, date, views, likes, channelid]);

  useEffect(() => {
    const getchanneldata = async () => {
      try {
        const {
          data: { items },
        } = await request.get("/channels", {
          params: {
            part: "snippet,statistics",
            id: channelid,
          },
        });
        console.log(items[0].snippet.thumbnails.medium);
        setChannellogo(items[0].snippet.thumbnails.medium);
        console.log(items[0]);
        setChannelname(items[0].snippet.title);
        console.log(channelname);
        setSubscribers(items[0].statistics.subscriberCount);
        // console.log(items);
      } catch (error) {
        console.log(error);
      }
    };
    getchanneldata();
  }, [channelid, channelname]);

  const handleshow = () => {
    setShow(!show);
  };
  console.log(toggleoptions);
  const handletoggle = () => {
    setToggleoptions(!toggleoptions);
  };

  return (
    <>
      <span className="video-title">{videoTitle}</span>
      <div className="channel">
        <div className="channel__left">
          <img src={channelLogo ? channelLogo.url : null} alt="logo" />
          <div className="channel__left__info">
            <span className="channel__left__info__name">{channelname}</span>
            <span className="channel__left__info__subscribers">
              {numeral(subscribers).format("0.a")} subscribers
            </span>
          </div>
          <button className="subscribe-btn">Subscribe</button>
        </div>

        <div className="channel__right">
          <button className="like">
            <FiThumbsUp /> {numeral(likes).format("0.a")}
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
            {numeral(views).format("0.a")} views
          </span>
          <span className="time">
            {moment(date).fromNow() === "a day ago"
              ? "1 day ago"
              : moment(date).fromNow()}
          </span>
        </div>
        <div
          className={show ? "discription-area-show" : "discription-area-hide"}
        >
          {description}
        </div>
        <span className="show-handler" onClick={handleshow}>
          Show {show ? "less" : "more"}
        </span>
      </div>
    </>
  );
};

export default Metadata;
