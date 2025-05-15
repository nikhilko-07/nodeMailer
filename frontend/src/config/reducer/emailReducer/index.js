import {createSlice} from "@reduxjs/toolkit";
import {sendEmail} from "@/config/action/emailAction";

const initialState = {
    isError: false,
    isLoading: false,
    isTokenThere: false,
    message: "",
    isSuccess: false,
}

const emailSlice = createSlice({
    name: "email",
    initialState: initialState,
    reducers: {
        reset:()=>initialState,
    },
    extraReducers:(builder) => {
        builder
            .addCase(sendEmail.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.message = "";
            })
                .addCase(sendEmail.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.isSuccess = false;
                    state.message = action.payload || "Something went wrong";
                })
            .addCase(sendEmail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.message = action.payload.message || "Email sent successfully";
            });
    }
})

export const {reset} = emailSlice.actions;

export default emailSlice.reducer;