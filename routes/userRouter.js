import express from 'express'
import { allUsers, signUpUser } from '../controllers/userController.js'

const router = express.Router()

router.post("/users", allUsers)
router.post("/signup", signUpUser)

export default router