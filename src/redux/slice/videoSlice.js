import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import request from "../../api";

var category = "All";
export const getPopularvideo = createAsyncThunk(
  "popularVideo",
  async (keyword, { getState }) => {
    const state = getState();
    try {
      const response = await request.get("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 20,
          pageToken: state.video.nextPageToken,
        },
      });
      category = "All";
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getsearchVideo = createAsyncThunk(
  "searchvideo",
  async (keyword, { getState }) => {
    const state = getState();
    try {
      const response = await request.get("/search", {
        params: {
          part: "snippet",
          q: keyword,
          type: "video",
          maxResults: 20,
          pageToken: state.video.nextPageToken,
        },
      });
      // console.log(state.video.nextPage);
      category = keyword;
      console.log(response);
      // console.log(category);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);



export const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    nextPageToken: null,
    loading: false,
    category: "All",
  },
  extraReducers: (builder) => {
    builder.addCase(getPopularvideo.fulfilled, (state, action) => {
      // console.log(_videos.length);
      const _videos = action.payload.data.items;
      state.videos =
        state.category === category ? [...state.videos, ..._videos] : _videos;
      state.nextPageToken = action.payload.data.nextPageToken;
      state.loading = false;
      state.category = category;
    });
    builder.addCase(getPopularvideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPopularvideo.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getsearchVideo.fulfilled, (state, action) => {
      const _videos = action.payload.data.items;
      state.videos =
        state.category === category ? [...state.videos, ..._videos] : _videos;
      state.nextPageToken = action.payload.data.nextPageToken;
      state.loading = false;
      state.category = category;
    });
    builder.addCase(getsearchVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getsearchVideo.rejected, (state) => {
      state.loading = false;
    });
    
  },
});

export default videoSlice.reducer;
