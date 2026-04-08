import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("📊 Database Connected");
        }).catch((err) => {
            console.log("💀 Data base Connection Error ", err);

        })
}

export default connectDB
