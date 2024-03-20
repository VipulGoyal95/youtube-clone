import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@redux-devtools/extension";
import videoReducer from "../slice/videoSlice";
import userReducer from "../slice/userSlice";
import selectedVideoReducer from "../slice/selectedVideoSlice";
import channelReducer from "../slice/channelSlice";
import commentsReducer from "../slice/commentsSlice";
import sidevideoReducer from "../slice/sidevideo";
import searchVideoReducer from "../slice/searchSlice";
import historyVideoReducer from "../slice/historyVideoSlice";
import subscribedchannelReducer from "../slice/subscribedchannelSlice";
import likedvideoReducer from "../slice/likedvideoSlice";
const store = configureStore({
  reducer: {
    video: videoReducer,
    user: userReducer,
    selectedVideo: selectedVideoReducer,
    channel: channelReducer,
    comments: commentsReducer,
    sideVideo: sidevideoReducer,
    searchVideo: searchVideoReducer,
    historyVideo: historyVideoReducer,
    subscribedchannel: subscribedchannelReducer,
    likedVideo:likedvideoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
