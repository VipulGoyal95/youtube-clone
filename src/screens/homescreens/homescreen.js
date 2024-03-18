import React, { useEffect } from "react";
// import Container from 'react-bootstrap/esm/Container'
import CategoriesBar from "../../components/categoriesbar/CategoriesBar";
import Video from "../../components/video/Video";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import InfiniteScroll from "react-infinite-scroll-component";
import "./homescreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPopularvideo, getsearchVideo } from "../../redux/slice/videoSlice";
import SkeletonVideo from "../../components/skeleton/skeletonVideo";
import { addHistoryVideo } from "../../redux/slice/historyVideoSlice";


const Homescreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularvideo());
  }, [dispatch]);

  const { videos, category, loading } = useSelector((state) => state.video);

  const fetchdata = () => {
    console.log("hello");
    if (category === "All") {
      dispatch(getPopularvideo());
    } else {
      dispatch(getsearchVideo(category));
    }
  };

  // console.log(document.documentElement.scrollHeight);
  const handleClick=(video)=>{
    dispatch(addHistoryVideo(video));
  }

  return (
    <div className="outer-container">
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchdata}
        hasMore={true}
        // height={"89vw"}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      >
        <div className="rows">
          {!loading
            ? videos.map((video) => (
                <div
                  className="col"
                  key={
                    typeof video.id === "object" && video.id
                      ? video.id.videoId
                      : video.id
                  }
                >
                  <Video videos={video} onClick={(video)=>handleClick(video)}/>
                </div>
              ))
            : [...Array(20)].map((id) => (
                <div className="col" key={id}>
                  <SkeletonVideo/>
                </div>
              ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Homescreen;
