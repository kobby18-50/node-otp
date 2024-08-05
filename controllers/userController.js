import { join, dirname, } from 'path'
import { randomBytes } from 'node:crypto';
import { fileURLToPath } from 'url'
import { Low } from "lowdb"
import { JSONFile } from 'lowdb/node'
import { verifyEmail }  from "../utils/mailHandler.js"

export const  allUsers = (req, res)=>{
    return res.json({
        success: true,
        message: "All users.. :>"
    })
}

export const signUpUser = async(req, res)=>{
    const { username, email, password } = req.body
    const userId = randomBytes(16).toString('hex');
    const userData = {
        id: userId,
        name: username,
        email: email,
        password: password
    }
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = join(__dirname, '../data/users.json')
    const adapter = new JSONFile(file)
    const db = new Low(adapter, {users:[]})
    await db.read(),
    await db.write(db.data.users.push(userData)) 
    const randCode = Math.floor(1000 + Math.random() * 900000)
    const result = await verifyEmail(username,email,randCode)
    console.log(result)
    res.cookie('username',username)
    res.cookie('verificationCode', randCode)

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
