import { join, dirname, } from 'path'
import { fileURLToPath } from 'url'
import { dbConnection } from "../utils/dataHandler.js"


const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '../data/users.json')

export const userLogin = async(req, res)=>{

    const {email, password} = req.body
    const db = dbConnection("users", file)
    await db.read()
    const result = await db.data
    const user = result['users'].find((user)=>(user.email === email && password === password))
    console.log(user)
    return res.json({
        success: true,
        message: "User Found",
        data : user,
    })
}