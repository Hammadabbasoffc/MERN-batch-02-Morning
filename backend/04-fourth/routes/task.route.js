import { Router } from "express"
import { isLoggedin } from "../middlewares/isLoggedin.js"
import { createTask } from "../controllers/task.controller.js"

const taskRouter = Router()

taskRouter.post("/create-task", isLoggedin, createTask)

export default taskRouter