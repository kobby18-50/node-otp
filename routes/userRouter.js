import express from 'express'
import { allUsers, signUpUser, verifyUser } from '../controllers/userController.js'

const router = express.Router()

router.post("/users", allUsers)
router.post("/signup", signUpUser)
router.post("/verifyuser", verifyUser)

export default router