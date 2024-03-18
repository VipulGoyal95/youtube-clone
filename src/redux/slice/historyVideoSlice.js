import { createSlice } from "@reduxjs/toolkit";

export const historyVideoSlice = createSlice({
    name:"historyVideo",
    initialState:{
        video:[],
        loading:true
    },
    reducers:{
        addHistoryVideo:(state,action)=>{
            state.video =  state.video.concat(action.payload);
            state.loading = false;
        }
    }
})

export const {addHistoryVideo}=historyVideoSlice.actions;

export default historyVideoSlice.reducer;