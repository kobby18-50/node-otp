import nodemailer from "nodemailer"
import dotenv from 'dotenv';
dotenv.config();

// console.log(process.env.ETHEREAL_HOST)
// console.log(process.env.ETHEREAL_PORT)
// console.log(process.env.ETHEREAL_USER)
// console.log(process.env.ETHEREAL_PASSWORD)
import {verifyEmail}  from "../utils/mailHandler.js"

// const transporter = nodemailer.createTransport({
//     host:  process.env.ETHEREAL_HOST,
//     port:  process.env.ETHEREAL_PORT,
//     auth: {
//         user: process.env.ETHEREAL_USER,
//         pass: process.env.ETHEREAL_PASSWORD,
//     }
// });
// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'ernesto.boyle@ethereal.email',
//         pass: 'dPz7ME6QPHcJbqA648'
//     }
// });

let message = {
    from: 'Sender Name <sender@example.com>',
    to: 'Recipient <recipient@example.com>',
    subject: 'Nodemailer is unicode friendly ✔',
    text: 'Hello to myself!',
    html: '<p><b>Hello</b> to myself!</p>'
};

export const  allUsers = (req, res)=>{
    return res.json({
        success: true,
        message: "All users.. :>"
    })
}

export const signUpUser = async(req, res)=>{
    const { username, email, password } = req.body
    const randCode = Math.floor(1000 + Math.random() * 900000)
    // const result = await transporter.sendMail(message)
    const result = await verifyEmail()
    console.log(result)
    return res.json({
        success: true,
        message: "All users.. :>",
        // data : `${username}, ${email}, ${password}` 
    })
}

// verifyEmail()