import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../api";

export const searchVideo = createAsyncThunk("searchVideo",async(keyword)=>{
    try {
        const res = await request.get("/search",{
            params:{
                part:"snippet",
                maxResults:10,
                q:keyword,
                type:"video,channel,playlist"
            }
        })
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
})
export const searchSlice = createSlice({
    name: "searchVideo",
    initialState: {
        videos: [],
        loading:true
    },
    extraReducers:builder=>{
        builder.addCase(searchVideo.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(searchVideo.fulfilled,(state,action)=>{
            state.loading=false
            state.videos=action.payload.data.items
        })
        builder.addCase(searchVideo.rejected,(state,action)=>{
            state.loading=true
        })
    }
})

export default searchSlice.reducer;