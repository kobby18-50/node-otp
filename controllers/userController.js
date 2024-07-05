export const  allUsers = (req, res)=>{
    return res.json({
        success: true,
        message: "All users.. :>"
    })
}

export const signUpUser = (req, res)=>{
    const { username, email, password } = req.body
    console.log(req.body)
    return res.json({
        success: true,
        message: "All users.. :>",
        data : `${username}, ${email}, ${password}` 
    })
}