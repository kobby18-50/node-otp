import dotenv from 'dotenv';
dotenv.config();
import nodemailer from "nodemailer"

// console.log(process.env.ETHEREAL_HOST)
// console.log(process.env.ETHEREAL_PORT)
// console.log(process.env.ETHEREAL_USER)
// console.log(process.env.ETHEREAL_PASSWORD)

const transporter = nodemailer.createTransport({
    host:  process.env.ETHEREAL_HOST,
    port:  process.env.ETHEREAL_PORT,
    auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASSWORD,
    }
});

let message = {
    from: 'Sender Name <sender@example.com>',
    to: 'Recipient <recipient@example.com>',
    subject: 'Nodemailer is unicode friendly ✔',
    text: 'Hello to myself!',
    html: '<p><b>Hello</b> to myself!</p>'
};

export const verifyEmail =  async()=>{
        const result = await transporter.sendMail(message)
        // console.log(result)
            return result
    }


// export default verifyEmail;