import {createAsyncThunk} from "@reduxjs/toolkit";
import {clientServer} from "@/config";


export const sendEmail = createAsyncThunk(
    "email/send",
    async (mail, thunkAPI) => {
        try {
            const response = await clientServer.post("/sendEmail", {
                subject: mail.subject,
                text: mail.text,
                usermail: mail.usermail,
                username: mail.username,
            });
            return thunkAPI.fulfillWithValue(response.data);
        } catch (err) {
            console.error("Error in sendEmail:", err.message);
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);
