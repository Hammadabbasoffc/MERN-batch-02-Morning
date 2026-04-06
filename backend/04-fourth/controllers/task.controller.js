import Task from "../models/Task.model.js"


const createTask = async (req, res) => {
    const { title, description, isCompleted } = req.body
    if (!title || !description) {
        res.status(400).json({
            message: "Title and description are required"
        })
    }

    try {

        const userId = req.user.id

        const newTask = await Task.create({ title, description, user: userId })

        if (!newTask) {
            res.status(400).json({
                message: "Task is Not Created"
            })
        }

        res.status(200).json({
            message: "Task is Created",
            newTask
        })


    } catch (error) {
        res.status(400).json({
            message: "Task is Not Created"
        })
    }
}


const getAllTasks = async (req, res) => {

    try {
        const allTask = await Task.find({})

        if (!allTask) {
            res.status(400).json({
                message: "No Task Found"
            })
        }
        res.status(200).json({
            message: "All Task",
            allTask
        })
    } catch (error) {
        res.status(400).json({
            message: "Error while fetching tasks",
            error
        })
    }

}

export { createTask, getAllTasks }