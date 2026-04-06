import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Task title is required"]
    },
    description: {
        type: String,
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: [true, "User reference is required"]
    }
});

const Task = mongoose.model("Task", taskSchema)

export default Task;