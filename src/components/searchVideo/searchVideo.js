import React, { useEffect, useState } from "react";
import "./searchVideo.scss";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchVideo = ({ video }) => {
  const {
    id,
    snippet: {
      publishedAt,
      channelId,
      description,
      title,
      thumbnails,
      channelTitle,
    },
  } = video;
  const [channellogo, setChannellogo] = useState(null);
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [subscribers, setSubscribers] = useState(null);
  const [customurl, setCustomurl] = useState(null);
  const [videocount, setVideocount] = useState(null);
  const [subscriptionStatus, setSubscriptionstatus] = useState(false);
  const [subscriptionId, setSubscriptionid] = useState(null);
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  var channelid = null;
  if (id.kind === "youtube#playlist") {
    var { playlistId } = id;
  }

  if (id.kind === "youtube#video") {
    var { videoId } = id;
  }

  if (id.kind === "youtube#channel") {
    channelid = id.channelId;
  }

  if (videoId) {
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
  }

  console.log(playlistId);
  if (playlistId) {
    console.log("called");
    const getplaylistDetails = async () => {
      try {
        const {
          data: { items },
        } = await request.get("/playlists", {
          params: {
            part: "contentDetails,snippet",
            id: playlistId,
          },
        });
        // console.log(items[0]);
        setVideocount(items[0].contentDetails.itemCount);
      } catch (error) {
        console.log(error);
      }
    };

    getplaylistDetails();
  }
  useEffect(() => {
    const getchanneldata = async () => {
      try {
        const {
          data: { items },
        } = await request.get("/channels", {
          params: {
            part: "snippet,statistics",
            id: channelId,
          },
        });
        setChannellogo(items[0].snippet.thumbnails.medium);
        // console.log(channellogo);
        // console.log(items);
        if (channelid) {
          // console.log(items[0]);
          setCustomurl(items[0].snippet.customUrl);
          setSubscribers(items[0].statistics.subscriberCount);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getchanneldata();
  }, [channelId, channelid]);

  const { accessToken } = useSelector((state) => state.user);
  if (channelid) {
    console.log(accessToken);
    const getsubscriptioninfo = async () => {
      try {
        const res = await request.get("/subscriptions", {
          params: {
            part: "snippet",
            mine: true,
            forChannelId: channelid,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // console.log(res);
        const values = {
          id: res.data.items.length !== 0 ? res.data.items[0].id : null,
          status: res.data.items.length !== 0,
        };
        setSubscriptionstatus(values.status);
        setSubscriptionid(values.id);
        // console.log(subscriptionStatus);
      } catch (error) {
        console.log(error);
      }
    };
    getsubscriptioninfo();
  }

  const deletesubscription = async () => {
    try {
      await request.delete("/subscriptions", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          id: subscriptionId,
        },
      });
      setSubscriptionstatus(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSubscription = async () => {
    try {
      const body = {
        snippet: {
          resourceId: {
            channelId: channelid,
          },
        },
      };
      const res = await request.post("/subscriptions", body, {
        params: {
          part: "snippet",
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log(res);
      const values = {
        id: res.data.id,
        status: true,
      };
      setSubscriptionid(values.id);
      setSubscriptionstatus(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubscription = () => {
    if (subscriptionStatus === false) {
      updateSubscription();
    } else {
      deletesubscription();
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    if (videoId) {
      navigate("/watch/"+videoId);
    }
    if(playlistId){
      navigate("/playlist"+playlistId);
    }
  };
  return (
    <div className="all-video-container" onClick={handleClick}>
      <div className="image">
        <img
          src={thumbnails.medium.url}
          alt="thumbnail"
          className={channelid ? "rounded-image" : "thumbnail-photo"}
        />
        {playlistId && <span>{videocount} videos</span>}
        {!channelid && !playlistId && <span>{_duration}</span>}
      </div>
      <div className="details">
        <span className="title">{title}</span>
        {!channelid && (
          <div className="video-data">
            <span>{numeral(views).format("0.a")} views •</span>
            <span>
              {moment(publishedAt).fromNow() === "a day ago"
                ? "1 day ago"
                : moment(publishedAt).fromNow()}
            </span>
          </div>
        )}
        <div className="channel-data">
          {!channelid && (
            <img
              className="channel-icon"
              src={channellogo && channellogo.url}
              alt="logo"
            />
          )}
          {channelid ? <span>{customurl}</span> : <span>{channelTitle}</span>}

          {channelid && (
            <span>• {numeral(subscribers).format("0.a")} subscribers</span>
          )}
        </div>
        <span className="short-description">{description}</span>
        {channelid && (
          <button
            className={subscriptionStatus ? "subscribed-btn" : "subscribe-btn"}
            onClick={handleSubscription}
          >
            {subscriptionStatus ? "Subscribed" : "Subscribe"}
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchVideo;
