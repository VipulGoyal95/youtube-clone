import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../api";

export const getchanneldata = createAsyncThunk(
  "getchanneldata",
  async (channelId) => {
    try {
      const res = await request.get("/channels", {
        params: {
          part: "snippet,statistics",
          id: channelId,
        },
      });
      //   console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getSubscriptiondetails =
  (channelId) => async (dispatch, getState) => {
    try {
      const res = await request.get("/subscriptions", {
        params: {
          part: "snippet",
          mine: true,
          forChannelId: channelId,
        },
        headers: {
          Authorization: `Bearer ${getState().user.accessToken}`,
        },
      });
      // console.log(res);
      const values = {
        id: res.data.items.length !== 0 ? res.data.items[0].id : null,
        status: res.data.items.length !== 0,
      };
      dispatch(subscriptionstatus(values));
    } catch (error) {
      console.log(error);
    }
  };

export const updateSubscriptiondetails =
  (channelId) => async (dispatch, getState) => {
    try {
      const body = {
        snippet: {
          resourceId: {
            channelId: channelId,
          },
        },
      };
      const res = await request.post("/subscriptions", body, {
        params: {
          part: "snippet",
        },
        headers: {
          Authorization: `Bearer ${getState().user.accessToken}`,
        },
      });
      // console.log(res);
      const values = {
        id: res.data.id,
        status: true,
      };
      dispatch(subscriptionstatus(values));
    } catch (error) {
      console.log(error);
    }
  };

export const deleteSubscriptiondetails =
  (channelId) => async (dispatch, getState) => {
    try {
      await request.delete("/subscriptions", {
        params: {
          id: `${getState().channel.subscriptionId}`,
        },
        headers: {
          Authorization: `Bearer ${getState().user.accessToken}`,
        },
      });
      const values = {
        id: null,
        status: false,
      };
      dispatch(subscriptionstatus(values));
    } catch (error) {
      console.log(error);
    }
  };
export const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channel: null,
    loading: true,
    subscriptionStatus: false,
    subscriptionId: null,
  },
  reducers: {
    subscriptionstatus: (state, action) => {
      state.subscriptionStatus = action.payload.status;
      state.subscriptionId = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getchanneldata.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getchanneldata.fulfilled, (state, action) => {
      state.loading = false;
      state.channel = action.payload.data.items[0];
    });
    builder.addCase(getchanneldata.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const { subscriptionstatus } = channelSlice.actions;
export default channelSlice.reducer;
