import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../api";

export const getRelatedvideos = createAsyncThunk(
  "getRelatedvideos",
  async (id) => {
    try {
      const res = await request.get("/search", {
        params: {
          part: "snippet",
          maxResults: 10,
          q:"",
          type: "video",
          videoType:"any"
        },
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const sideVideoSlice = createSlice({
  name: "sideVideo",
  initialState: {
    videos: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRelatedvideos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRelatedvideos.fulfilled, (state, action) => {
      state.loading = false;
      state.videos = action.payload.data.items;
    });
    builder.addCase(getRelatedvideos.rejected, (state, action) => {
      state.loading = true;
    });
  },
});

export default sideVideoSlice.reducer;
