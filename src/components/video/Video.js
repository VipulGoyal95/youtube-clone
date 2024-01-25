import React from 'react'
import "./video.scss";

const Video = () => {
  return (
    <div className="video-container">
      <div className="top">
        <img src="https://i.ytimg.com/vi/QGfn7JeXK54/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAM3M1_GRib3r_ZruTWP50IvguM2g" alt="thumbnail"/>
        <span>43:23</span>
      </div>
      <div className="bottom">
        <div className="channel-logo">
          <img src="https://yt3.ggpht.com/ytc/AIf8zZTrgnjr_yPdUVQUOGEIAuZ8tc4oP7DlR-_aR1rO=s68-c-k-c0x00ffffff-no-rj" alt="logo"/>
        </div>
        <div className="right">
          <span className="title">Counts subset with sum k|Dp on Subsequences<br></br></span>
          <span className="channelname">
            take u forward
          </span>
          <div className="bottom-most">
            <span>
              144k views •
            </span>
            <span>
              1 year ago
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
