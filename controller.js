import { totp } from "otplib"
import sendOTPMail from "./utils/sendOTPMail.js"
import { otpStore } from "./utils/otpStore.js"


const generateOTP = async (req,res) => {
    // genn OTP
    const {email} = req.body
    const otp = parseInt(totp.generate(process.env.OTP_SECRET))
    // res.send(otp)

    // store OTP locally
    otpStore[email] = {
        otp ,
        createdAt : Date.now()
    }

    // send otp to email
    await sendOTPMail({OTP : otp, email})

    res.send('check mail for OTP')

    // console.log(JSON.stringify(otpStore))
}

const validateOTP = async (req,res) => {
    const {code , email } = req.body

    // check for empty values

    if(!code || !email){
        return res.status(400).json({msg : 'Some values were not provided'})
    }

    // finding the otp with email
    const otpData = otpStore[email]

    // check if otpdata exists
    if(!otpData){
        return res.status(400).json({msg : 'OTP not found'})
    }

    // check if code entered is the same as the otp stored

    if(code !== otpData.otp){
        return  res.status(200).json({msg : 'OTP invalid'})
    }

    // set an expiry for OTP
    const currentTime = Date.now()

    if(currentTime - otpData.createdAt > parseInt(process.env.OTP_EXPIRATION_TIME)){
        return res.status(400).json({msg : 'OTP expired'})
    }



    delete otpStore[email]
    res.status(200).json({msg : 'OTP verified'})
}

export {
    generateOTP, validateOTP
}