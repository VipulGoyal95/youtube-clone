import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../api";

export const getselecteVideo = createAsyncThunk("selecteVideo", async (id) => {
  try {
    const req = await request.get("/videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });
    console.log(req);
    return req;
  } catch (error) {
    console.log(error);
  }
});
export const selectedVideoSlice = createSlice({
  name: "selectedVideo",
  initialState: {
    selectedVideo: null,
    loading: true,
  },
  extraReducers: (builder) => {
    builder.addCase(getselecteVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getselecteVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedVideo = action.payload.data.items[0];
    });
    builder.addCase(getselecteVideo.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default selectedVideoSlice.reducer;
