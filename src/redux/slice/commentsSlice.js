import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../api";

export const getcomments = createAsyncThunk("getcomments", async (id,{getState}) => {
  try {
    const state = getState();
    const res = await request.get("/commentThreads", {
        params:{
            part: "snippet",
            videoId: id,
            textFormat: "plainText",
            maxResults: 10,
        },
        headers:{
            Authorization: `Bearer ${state.user.accessToken}`
        }
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
});

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: null,
    loading: true,
  },
  extraReducers: (builder) => {
    builder.addCase(getcomments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getcomments.fulfilled, (state, action) => {
      state.comments = action.payload.data.items;
      state.loading = false;
    });
    builder.addCase(getcomments.rejected, (state) => {
      state.loading = true;
    });
  },
});

export default commentsSlice.reducer;
