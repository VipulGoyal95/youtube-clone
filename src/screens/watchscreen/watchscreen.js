import React, { useEffect } from "react";
import "./watchscreen.scss";

import SideVideo from "../../components/sideVideo/sideVideo";
import Metadata from "../../components/metadata/metadata";
import Comments from "../../components/comments/comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getselecteVideo } from "../../redux/slice/selectedVideoSlice";
import { getcomments } from "../../redux/slice/commentsSlice";
import { getRelatedvideos } from "../../redux/slice/sidevideo";
import SkeletonVideo from "../../components/skeleton/skeletonVideo";

const Watchscreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getselecteVideo(id));
    dispatch(getcomments(id));
  }, [dispatch, id]);
  const { selectedVideo, loading } = useSelector(
    (state) => state.selectedVideo
  );
  const { loading: commentLoading } = useSelector((state) => state.comments);

  const categoryid = !loading && selectedVideo.snippet.channelId;
  useEffect(() => {
    if (categoryid) {
      dispatch(getRelatedvideos(categoryid));
    }
  }, [dispatch, categoryid]);

  const { videos, loading: videoloading } = useSelector(
    (state) => state.sideVideo
  );

  return (
    <div className="watch-video-container">
      <div className="left">
        <div className="video">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="MY VIDEO"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? <Metadata video={selectedVideo} /> : <p>Loading...</p>}
        {!commentLoading ? (
          <Comments commentCount={selectedVideo.statistics.commentCount} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="right">
        {!videoloading && (
          videos.map((video) => <SideVideo video={video} />)
        ) }
      </div>
    </div>
  );
};

export default Watchscreen;
