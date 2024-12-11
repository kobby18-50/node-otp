import { join, dirname, } from 'path'
import { fileURLToPath } from 'url'
import { verifyEmail }  from "../utils/mailHandler.js"
import { genUserId, genVerificationCode  } from '../utils/specialFun.js';
import { dbConnection} from '../utils/dataHandler.js'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '../data/users.json')

export const  allUsers = async(req, res)=>{
    const db = dbConnection("users",file)
    await db.read()
    const users = await db.data
    console.log(users)
    return res.json({
        success: true,
        data : users,
        message: "All users.. :>"
    })
}

export const  singleUser = async(req, res)=>{
    const {userId} = req.params
    const db = dbConnection("users",file)
    await db.read()
    const result = await db.data
    const user = result['users'].find((user)=>(user.id === userId))
    return res.json({
        success: true,
        message: "User Found",
        data : user,
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
    const db  = dbConnection("users",file)
    await db.read(),
    await db.write(db.data.users.push(userData)) 
    const vCode = genVerificationCode()
    const result = await verifyEmail(username,email,vCode)
    console.log(result)
    res.cookie('username',username)
    res.cookie('verificationCode', vCode)

    return res.json({
        success: true,
        message: "User Successfully Created.. :)",
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
