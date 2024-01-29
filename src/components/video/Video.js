import React, { useEffect,useState } from 'react'
import "./video.scss";
import request from '../../api';

const Video = ({videos}) => {
  const [views,setViews]=useState(null);
  const [duration,setDuration] = useState(null);

  useEffect(()=>{
    const getVideoDetails = async()=>{
      try { 
          const {data:{items}} = await request.get("/videos",{
            params:{
              part:"contentDetails,statistics",
              id:videos.id
            }
          })
          
          setViews(items.statistics.viewCount);
          setDuration(items.contentDetails.duration);
          console.log(items);
      } catch (error) {
        
      }
    }

    getVideoDetails();
  },[videos.id])

  return (
    <div className="video-container">
      <div className="top">
        <img src={videos.snippet.thumbnails.medium.url} alt="thumbnail"/>
        <span>43:23</span>
      </div>
      <div className="bottom">
        <div className="channel-logo">
          <img src="https://yt3.ggpht.com/ytc/AIf8zZTrgnjr_yPdUVQUOGEIAuZ8tc4oP7DlR-_aR1rO=s68-c-k-c0x00ffffff-no-rj" alt="logo"/>
        </div>
        <div className="right">
          <span className="title">{videos.snippet.title}<br></br></span>
          <span className="channelname">
            {videos.snippet.channelTitle}
          </span>
          <div className="bottom-most">
            <span>
             {views? parseInt(views)/1000+"k views":"views"} •
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
