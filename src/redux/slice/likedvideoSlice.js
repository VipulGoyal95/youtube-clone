import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLikedVideo = createAsyncThunk("getLikedVideo", async (id,{getState}) => {
  try {
    const state = getState();
    const req = await request.get("/videos", {
      params: {
        part: "snippet",
        myRating: "like",
      },
      headers: {
        Authorization: `Bearer ${state.user.accessToken}`,
      },
    });
    console.log(req);
  } catch (error) {
    console.log(error);
  }
});
export const likedvideoSlice = createSlice({
  name: "likedvideo",
  initialState: {
    video: [],
    loading: true,
  },
  reducers: {
    addLikedVideo: (state, action) => {
      state.video = state.video.concat(action.payload);
      state.loading = false;
    },
  },
});
