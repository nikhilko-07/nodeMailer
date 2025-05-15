import axios from "axios";

export const BASE_URL = "https://node-mailer-ten.vercel.app";

export const clientServer = axios.create({
    baseURL: BASE_URL
});