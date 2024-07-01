import sendEmail from "./sendEmail.js";

const sendOTPMail = async ({OTP, email}) => {
    const message = `<p>This is your OTP ${OTP} </p>`


    return sendEmail({to : email, subject : 'OTP', html : message})
}


export default sendOTPMail