import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
import userRouter from "./routes/user.route.js";

dotenv.config()

const app = express()

const PORT = process.env.PORT

connectDB()
app.use(express.json())

app.use("/api/v1/users", userRouter)

app.listen(PORT, () => {
    console.log("🌍 Server is running");

})

// localhost:3000/api/v1/users/register