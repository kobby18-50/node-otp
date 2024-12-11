import express from 'express'
import { allUsers, signUpUser, verifyUser, singleUser } from '../controllers/userController.js'

const router = express.Router()

router.get("/users", allUsers)
router.get("/user/:userId", singleUser)
router.post("/signup", signUpUser)
router.post("/verifyuser", verifyUser)

export default router