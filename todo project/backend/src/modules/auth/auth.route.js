import { Router } from "express"
import { registerUser, loginUser, getMe } from "./auth.controller.js"
import isLoggedin from "../../core/middleware/isLoggedin.js"
const authRouter = Router()

authRouter.post("/register-user", registerUser)
authRouter.post("/login-user", loginUser)
authRouter.get("/get-me", isLoggedin, getMe)

export default authRouter