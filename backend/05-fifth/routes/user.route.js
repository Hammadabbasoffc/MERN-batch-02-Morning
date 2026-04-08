import { Router } from "express"
import { getMe, loginUser, registerUser } from "../controllers/user.controller.js"
import isLoggedin from "../middlewares/isLoggedin.js"

const userRouter = Router()

userRouter.post("/register-user", registerUser)
userRouter.post("/login-user", loginUser)
userRouter.get("/get-me", isLoggedin, getMe)

export default userRouter