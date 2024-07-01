import express from 'express'
import {generateOTP, validateOTP} from './controller.js'

const router = express.Router()

router.post('/generate', generateOTP)

router.post('/validate', validateOTP)

export default router