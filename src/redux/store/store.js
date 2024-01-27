import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../slice/videoSlice"
import userReducer from "../slice/userSlice";

const store = configureStore({
    reducer:{
        video:videoReducer,
        user:userReducer
    }

})

export default store;