import express from "express"
import connectDB from "./db/DB.js"

const app = express()

const PORT = 3000

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})