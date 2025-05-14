import express from "express";
import {landingPage, sendEmail} from "../controllers/mail.controller.js";

const router  = express.Router();

router.route("/").get(landingPage);
router.route("/sendEmail").post(sendEmail)

export default router;