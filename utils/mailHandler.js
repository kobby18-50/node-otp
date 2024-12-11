import dotenv from 'dotenv';
dotenv.config();
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host:  process.env.ETHEREAL_HOST,
    port:  process.env.ETHEREAL_PORT,
    auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASSWORD,
    }
});

export const verifyEmail =  async(username,email,randCode, )=>{
        const result = await transporter.sendMail(
            {
                from: 'Sender Name <sender@example.com>',
                to: `Recipient ${email}`,
                subject: 'Email Verification ✔',
                html: `<p><b>Hello ${username} </b> This is your verification code ${randCode}</p>`
            }
        )
        // console.log(result)
            return result
    }
