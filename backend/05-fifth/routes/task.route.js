import { Router } from "express";
import isLoggedin from "../middlewares/isLoggedin.js";
import { createTask, deleteTask, getMyTasks, updateTask } from "../controllers/task.controller.js";
import upload from "../middlewares/multer.js";

const taskRouter = Router()

taskRouter.post("/create-task", isLoggedin, upload.single("image"), createTask)
taskRouter.get("/my-tasks", isLoggedin, getMyTasks)
taskRouter.put("/update-task/:taskId", isLoggedin, updateTask)
taskRouter.delete("/delete-task/:taskId", isLoggedin, deleteTask)

export default taskRouter