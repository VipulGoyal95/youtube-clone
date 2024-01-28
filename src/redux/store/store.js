import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@redux-devtools/extension";
import videoReducer from "../slice/videoSlice"
import userReducer from "../slice/userSlice";

const store = configureStore({
    reducer:{
        video:videoReducer,
        user:userReducer,
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false
    })

})

export default store;