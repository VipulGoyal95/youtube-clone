import React, { useEffect,useState } from 'react'
import "./video.scss";
import request from '../../api';
import moment from 'moment';
import numeral from 'numeral';

const Video = ({videos}) => {
  const [views,setViews]=useState(null);
  const [duration,setDuration] = useState(null);
  const [channellogo,setChannellogo]=useState(null);
  const seconds=moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds*1000).format("mm:ss");
  const channelid = videos.snippet.channelId;
  useEffect(()=>{
    const getVideoDetails = async()=>{
      try { 
          const {data:{items}} = await request.get("/videos",{
            params:{
              part:"contentDetails,statistics",
              id:videos.id
            }
          })
          // console.log(items[0].statistics);
          setViews(items[0].statistics.viewCount);
          setDuration(items[0].contentDetails.duration);
          // console.log(items);
      } catch (error) {
        console.log(error);
      }
    }

    getVideoDetails();
  },[videos.id])


  useEffect(()=>{
    const getchanneldata=async()=>{
      try {
        const {data:{items}} = await request.get("/channels",{
          params:{
            part:"snippet",
            id:channelid
          }
        })
        setChannellogo(items[0].snippet.thumbnails.medium);
        // console.log(channellogo);
        // console.log(items);
      } catch (error) {
        console.log(error);
      }
    }

    getchanneldata();
  },[channelid])

  return (
    <div className="video-container">
      <div className="top">
        <img src={videos.snippet.thumbnails.medium.url?videos.snippet.thumbnails.medium.url:""} alt="thumbnail"/>
        <span>{_duration}</span>
      </div>
      <div className="bottom">
        <div className="channel-logo">
          <img src={channellogo.url?channellogo.url:""} alt="logo"/>
        </div>
        <div className="right">
          <span className="title">{videos.snippet.title}<br></br></span>
          <span className="channelname">
            {videos.snippet.channelTitle}
          </span>
          <div className="bottom-most">
            <span>
             {numeral(views).format("0.a")} views •
            </span>
            <span>
              {moment(videos.snippet.publishedAt).fromNow()==="a day ago"? "1 day ago": moment(videos.snippet.publishedAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
