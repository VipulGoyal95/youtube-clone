import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import request from "../../api";

export const getPopularvideo =createAsyncThunk("popularVideo", async()=>{
    try {
        const response = await request.get("/videos",{
            params: {
                part: "snippet,contentDetails,statistics",
                chart:"mostPopular",
                regionCode: "IN",
                maxResults: 20,
                pageToken: '',
            }
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
})



export const videoSlice = createSlice({
    name: "video",
    initialState: {
        videos: [],
        nextPageToken:null,
        loading:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(getPopularvideo.fulfilled,(state,action)=>{
            state.videos=action.payload.data.items;
            state.nextPageToken=action.payload.data.nextPageToken;
            state.loading=false;
        })
        builder.addCase(getPopularvideo.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(getPopularvideo.rejected,(state)=>{
            state.loading=false;
        })
    }
})



export default videoSlice.reducer;