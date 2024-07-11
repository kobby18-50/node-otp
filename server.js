import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import nodemailer from "nodemailer"

dotenv.config()

const app = express()

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true}));

app.get('/', (req,res)=>{
    res.send('Welcome to OTP test')
})

app.use(userRouter)

const port = process.env.PORT || 5000

const start = () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()