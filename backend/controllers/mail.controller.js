import {replyModule} from "../helper/reply.js";
import nodemailer from "nodemailer";
import {messagesModule} from "../helper/message.js";
import dotenv from "dotenv";
dotenv.config();

export const landingPage = async (req, res) => {
    res.send("Node Mailer working...");
}

export const sendEmail = async (req, res) => {
    try{

        const { subject,text, usermail, username } = req.body;
        if(!subject || !text || !usermail || !username){
            res.status(400).send("Please fill the required fields");
        }
        if (!usermail) {
            return res.status(400).json({ error: "Email is required" });
        }

        const gmailRegex = /^[\w.-]+@gmail\.com$/;

        if (!gmailRegex.test(usermail)) {
            return res.status(403).json({ error: "Access restricted to @gmail.com addresses only" });
        }

        await sendMail(subject,messagesModule(usermail, username, subject, text) , text, usermail, );
        if(!sendEmail){
            return res.status(400).json({ error: "Something went wrong at sending email" });
        }
        await sendReply(usermail, replyModule(usermail), text, username);
        if(!sendEmail){
            return res.status(403).json({ error: "Something went wrong at sending reply" });
        }
        return res.status(200).json({ message: "Email and reply sent successfully" });
    }catch(err){
        res.status(500).send({message:err.message});
    }
}

const transporter = nodemailer.createTransport({
    host: process.env.SMTP,
    secure: true,
    auth: {
        user: process.env.RECEIVER,
        pass: process.env.PASS,
    },
});

async function sendMail(subject,html , text, usermail) {
    const info = await transporter.sendMail({
        from: `"Nikhil Kohli"${process.env.RECEIVER}`,
        to: process.env.RECEIVER,
        subject: ` Message from ${usermail}`,
        text,
        html
    });
}

async function sendReply(usermail, html, text, username){
    const info = await transporter.sendMail({
        from: `"Nikhil Kohli" ${process.env.RECEIVER}`,
        to: usermail,
        subject: `Thanks ${username}`,
        text,
        html
    })
}

