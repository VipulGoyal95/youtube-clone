import { createAsyncThunk,createSlice, current } from "@reduxjs/toolkit";
import {auth,provider} from "../../firebase";
import { signInWithPopup } from "firebase/auth";


// export const loginuser =()=> async (dispatch)=>{
//     try{
//         dispatch(login_request());
//         const res = await signInWithPopup(auth,provider);
//         const token = res.user.accessToken;
//         dispatch(login_success(token));
//     }catch(err){
//         console.log(err);
//     }
// }

export const loginuser = createAsyncThunk("loginuser", async()=>{
    try{ 
        const res = await signInWithPopup(auth,provider);
        sessionStorage.setItem("yt-access-token",res._tokenResponse.oauthAccessToken);
        const profile ={
            displayName: res.user.displayName,
            email: res.user.email,
            photoURL: res.user.photoURL
        }
        console.log(res);
        sessionStorage.setItem("yt-user",JSON.stringify(profile));
        return res;
    }catch(err){
        console.log(err);
    }
}) 


export const logoutuser =()=> async(dispatch)=>{
    await auth.signOut();
    dispatch(logout());
    sessionStorage.removeItem("yt-access-token");
    sessionStorage.removeItem("yt-user");
}


export const userSlice = createSlice({
    name: "user",
    initialState: {
        user:sessionStorage.getItem("yt-user")? JSON.parse(sessionStorage.getItem("yt-user")):null,
        accessToken:sessionStorage.getItem("yt-access-token")?sessionStorage.getItem("yt-access-token"):null,
        loading: false
    },
    reducers: {
        login_request:(state)=>{
            state.loading = true
        },
        login_success:(state,action)=>{
            console.log("before", current(state));
            state.loading = false
            state.accessToken = action.payload
            console.log("after", current(state));
        },
        logout:(state)=>{
            state.accessToken = null
            state.user = null
            state.loading=false
        },
        // login_failure:(state,action)=>{
        //     state.loading = false
        //     state.accessToken = null
        //     state.user = null
        // },
        // load_profile:(state,action)=>{
        //     state.user = action.payload
        // }
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
            state.accessToken = action.payload._tokenResponse.oauthAccessToken
            const profile ={
                displayName: action.payload.user.displayName,
                email: action.payload.user.email,
                photoURL: action.payload.user.photoURL
            }
            state.user = profile
        })
    }
})

export const {login_failure, login_success,login_request ,load_profile,logout} = userSlice.actions;

export default userSlice.reducer;