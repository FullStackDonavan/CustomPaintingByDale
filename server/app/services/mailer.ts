import nodemailer, { TransportOptions } from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
        user: process.env.EMAIL,
        pass: process.env.MAIL_APP_PASSWORD,
    },
});

export default transporter;
