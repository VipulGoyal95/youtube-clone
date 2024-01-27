import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {auth,provider} from "../../firebase";
import { signInWithPopup } from "firebase/auth";

var token;
export const loginuser = createAsyncThunk("loginuser", async()=>{
    try{ 
        const res = await signInWithPopup(auth,provider);
        console.log(res);
        token = res.user.accessToken;
    }catch(err){
        console.log(err);
    }
}) 
// export const loginuser =()=> async (dispatch)=>{
//     try{
        
//         const res = await signInWithPopup(auth,provider);
//         console.log(res);
//     }catch(err){
//         console.log(err);
//     }
// }


export const userSlice = createSlice({
    name: "user",
    initialState: {
        user:null,
        accessToken:null,
        loading: false
    },
    reducers: {
        login_request:(state)=>{
            state.loading = true
        },
        login_success:(state,action)=>{
            state.loading = false
            state.accessToken = action.payload
        },
        login_failure:(state,action)=>{
            state.loading = false
            state.accessToken = null
            state.user = null
        },
        load_profile:(state,action)=>{
            state.user = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginuser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginuser.rejected, (state) => {
            state.loading = false
        })
        builder.addCase(loginuser.fulfilled, (state, action) => {
            state.loading = false
            state.accessToken = token 
        })
    }
})

export default userSlice.reducer;