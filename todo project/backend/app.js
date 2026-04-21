import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/core/middleware/errorHandler.js";
import taskRouter from "./src/modules/task/task.route.js";
import authRouter from "./src/modules/auth/auth.route.js";


const app = express()

dotenv.config()

// www.taskr.com (DNS)
// 198.132.10.0

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));

app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));




app.use("/api/v1/auth", authRouter)
app.use("/api/v1/tasks", taskRouter)

app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: '🚀 Server is running smoothly - Module Structure',
        timestamp: new Date().toISOString()
    });
});

app.use(errorHandler)

export default app