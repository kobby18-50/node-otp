import nodemailer from 'nodemailer'
import nodemailerConfig from './nodemailerConfig.js'

const sendEmail = async ({to, subject, text, html}) => {
    const transporter = nodemailer.createTransport(nodemailerConfig)

    return transporter.sendMail({
        from : '"Kwabena" <kwabena@mail.com> ',
        to,
        subject,
        text,
        html
    })
}

export default sendEmail