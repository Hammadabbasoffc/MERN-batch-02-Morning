import { Router } from "express"
import { registerUser, loginUser, getMe } from "./user.controller.js"
import isLoggedin from "../../core/middleware/isLoggedin.js"
const userRouter = Router()

userRouter.post("/register-user", registerUser)
userRouter.post("/login-user", loginUser)
userRouter.get("/get-me", isLoggedin, getMe)

export default userRouter