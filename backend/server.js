import express from 'express';
import mailRoutes from "./routes/mail.routes.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();


app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);



app.use(express.json());

const PORT = process.env.PORT || 9000;

app.use(mailRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})