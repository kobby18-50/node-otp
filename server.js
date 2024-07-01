import express from 'express'
import dotenv from 'dotenv'
import 'express-async-errors'

// errors
import notFound from './notfound.js'
import errorhandler from './error-handler.js'

// routes 
import otpRoutes from './route.js'

dotenv.config()

const app = express()

app.use(express.json())


// homepage
app.get('/', (req,res)=>{
    res.send('Welcome to OTP test')
})

// routes 
app.use('/api/v1', otpRoutes)

// not found
app.use(notFound)

// error 
app.use(errorhandler)


// error handler

//routes

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