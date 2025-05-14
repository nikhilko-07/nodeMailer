import express from 'express';
import mailRoutes from "./routes/mail.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(mailRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})