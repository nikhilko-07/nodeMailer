import {configureStore} from "@reduxjs/toolkit";
import emailReducer from "@/config/reducer/emailReducer";


export const store = configureStore({
    reducer: {
        emailReducer: emailReducer
    }
})