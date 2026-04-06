import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log("Connected to MongoDB");
            })
            .catch((error) => {
                console.log(`connection Error ${error}`);
            });
    } catch (error) {
        console.log(`connection Error ${error}`);
    }
}

export default connectDB;