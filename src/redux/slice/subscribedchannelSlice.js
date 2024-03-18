import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../api";

export const getsubscribedchannel = createAsyncThunk(
  "getsubscribedchannel",
  async (id, { getState }) => {
    console.log("called");
    const state = getState();
    try {
      const res = await request.get("/subscriptions", {
        params: {
          part: "snippet,contentDetails",
          mine: true,
          maxResults: 20,
        },
        headers: {
          Authorization: `Bearer ${state.user.accessToken}`,
        },
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
export const subscribedchannelslice = createSlice({
  name: "subscribedchannel",
  initialState: {
    channel: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getsubscribedchannel.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getsubscribedchannel.fulfilled, (state, action) => {
      state.loading = false;
      state.channel = action.payload.data.items;
    });
    builder.addCase(getsubscribedchannel.rejected, (state) => {
      state.loading = true;
    });
  },
});

export default subscribedchannelslice.reducer;
