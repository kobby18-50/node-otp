import { join, dirname, } from 'path'
import { fileURLToPath } from 'url'
import { verifyEmail }  from "../utils/mailHandler.js"
import { genUserId, genVerificationCode  } from '../utils/specialFun.js';
import { createData } from '../utils/dataHandler.js'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '../data/users.json')

export const  allUsers = (req, res)=>{
    
    return res.json({
        success: true,
        message: "All users.. :>"
    })
}

export const signUpUser = async(req, res)=>{
    const { username, email, password } = req.body
    const uID = genUserId()
    const userData = {
        id: uID,
        name: username,
        email: email,
        password: password
    }
    const db  = createData("users",file)
    await db.read(),
    await db.write(db.data.users.push(userData)) 
    const vCode = genVerificationCode()
    const result = await verifyEmail(username,email,vCode)
    console.log(result)
    res.cookie('username',username)
    res.cookie('verificationCode', vCode)

    return res.json({
        success: true,
        message: "All users.. :>",
        data : `${username}, ${email}, ${password}` 
    })
}

export const verifyUser = (req, res)=>{
    const { verificationCode } = req.body
    const verificationCodeFromCookie = req.cookies.verificationCode
    if(verificationCodeFromCookie !== verificationCode ){
        return res.json({
            success: false,
            message: "Wrong Verification code..",
        })
    }
    return res.json({
        success: true,
        message: "Verification Successful",
    })
    
}
