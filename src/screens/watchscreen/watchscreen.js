import React, { useState } from "react";
import "./watchscreen.scss";
import { PiShareFat } from "react-icons/pi";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { LiaDownloadSolid } from "react-icons/lia";
import { LuListPlus } from "react-icons/lu";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import SideVideo from "../../components/sideVideo.js/sideVideo";

const Watchscreen = () => {
  const [toggleoptions, setToggleoptions] = useState(false);
  console.log(toggleoptions);
  const handletoggle = () => {
    setToggleoptions(!toggleoptions);
  };
  return (
    <div className="outer-container">
      <div className="left">
        <div className="video">
          <video />
        </div>
        <span>Best Rc Airplane for kids...</span>
        <div className="channel">
          <div className="channel__left">
            <img
              src="https://yt3.ggpht.com/ytc/AIf8zZRGhuPaZpNkT1OwVQ-WkehFZAx1SOpCio7xSV-mkg=s88-c-k-c0x00ffffff-no-rj"
              alt="logo"
            />
            <div className="channel__left__info">
              <span className="channel__left__info__name">
                MR.INDIAN HACKER
              </span>
              <span className="channel__left__info__subscribers">
                35.6M subscribers
              </span>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>

          <div className="channel__right">
            <button className="like">
              <FiThumbsUp /> 175k{" "}
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
        <div className="discription"></div>
      </div>
      <div className="right">
      {[...Array(10)].map(()=><SideVideo/>)}
      </div>
    </div>
  );
};

export default Watchscreen;
