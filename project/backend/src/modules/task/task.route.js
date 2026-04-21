import { Router } from "express";
import { createTask, getMyTasks, updateTask, deleteTask } from "./task.controller.js";
import isLoggedin from "../../core/middleware/isLoggedin.js";
import upload from "../../core/middleware/multer.js";
const taskRouter = Router()

taskRouter.post("/create-task", isLoggedin, upload.array("images", 4), createTask)
taskRouter.get("/my-tasks", isLoggedin, getMyTasks)
taskRouter.put("/update-task/:taskId", isLoggedin, updateTask)
taskRouter.delete("/delete-task/:taskId", isLoggedin, deleteTask)

export default taskRouter