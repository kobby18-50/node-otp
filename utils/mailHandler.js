import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

export const verifyEmail = async(userEmail, code)=>{

        const result =  await transporter.sendMail(
            {
                from: 'yourusername@email.com',
                to: userEmail,
                subject: 'Please verify your email address',
                text: code
              }
        )
            return result

    }

export const verifyUserName = async(email, code)=>{
    const result =  await transporter.sendMail(
        {
            from: 'yourusername@email.com',
            to: email,
            subject: 'Please verify your login',
            text: code
          }
    )
        return result
}