import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../api";

export const getLikedVideo = createAsyncThunk(
  "getLikedVideo",
  async (id, { getState }) => {
    try {
      const state = getState();
      const req = await request.get("/videos", {
        params: {
          part: "snippet",
          myRating: "like",
          maxResults: 20,
        },
        headers: {
          Authorization: `Bearer ${state.user.accessToken}`,
        },
      });
      console.log(req);
      return req;
    } catch (error) {
      console.log(error);
    }
  }
);
export const likedvideoSlice = createSlice({
  name: "likedvideo",
  initialState: {
    video: [],
    loading: true,
  },
  extraReducers: (builder) => {
    builder.addCase(getLikedVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLikedVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.video = action.payload.data.items;
    });
    builder.addCase(getLikedVideo.rejected, (state) => {
      state.loading = true;
    });
  },
});

export default likedvideoSlice.reducer;
