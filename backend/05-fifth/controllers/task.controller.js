import Task from "../models/Task.model.js";
import fs from "fs";

const createTask = async (req, res) => {
    const { title, description } = req.body;
    const userId = req.user.userId;



    const image = req.file ? req.file.path : null; // Get the uploaded file path if it exists

    if (!image) {
        return res.status(400).json({ message: "Image is required" })
    }




    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required" })
    }

    if (!userId) {
        return res.status(400).json({ message: "User Id is required" })
    }

    try {

        const newTask = await Task.create({
            title, description, user: userId, image
        })

        if (!newTask) {
            return res.status(400).json(
                { message: "Failed to create task" }
            )
        }

        return res.status(201).json(
            {
                message: "Task created successfully",
                task: newTask
            }
        )

    } catch (error) {
        return res.status(500).json({ message: "Error creating task", error })
    }


}

const getMyTasks = async (req, res) => {
    const userId = req.user.userId;
    if (!userId) {
        return res.status(400).json({ message: "User Id is required" })
    }

    try {
        const tasks = await Task.find({ user: userId })
        if (!tasks) {
            return res.status(404).json({ message: "No tasks found for this user" })
        }

        if (tasks.length === 0) {
            return res.status(200).json({ message: "You have not created any tasks yet" })
        }
        return res.status(200).json(
            {
                message: "Tasks fetched successfully",
                tasks
            }
        )
    } catch (error) {
        return res.status(500).json({ message: "Error fetching tasks", error })
    }
}

const updateTask = async (req, res) => {
    const taskId = req.params.taskId;
    const { title, description, isCompleted } = req.body;
    const userId = req.user.userId;

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized user" });
    }

    try {
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // ✅ Ownership check
        if (task.user.toString() !== userId) {
            return res.status(403).json({ message: "You are not allowed to update this task" });
        }

        // ✅ Update fields
        if (title) task.title = title;
        if (description) task.description = description;
        if (isCompleted !== undefined) task.isCompleted = isCompleted;

        await task.save();

        return res.status(200).json({
            message: "Task updated successfully",
            task
        });

    } catch (error) {
        return res.status(500).json({ message: "Error updating task", error });
    }
};

const deleteTask = async (req, res) => {
    const taskId = req.params.taskId;
    const userId = req.user.userId;

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized user" });
    }

    try {
        // ✅ Find task that belongs to this user only
        const task = await Task.findOneAndDelete({
            _id: taskId,
            user: userId
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found or you are not authorized to delete it"
            });
        }

        return res.status(200).json({
            message: "Task deleted successfully",
            task
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error deleting task",
            error
        });
    }
};

export { createTask, getMyTasks, updateTask, deleteTask }