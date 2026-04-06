import mongoose from "mongoose";
const connectDB = async () => {
    try {
        mongoose.connect("mongodb://admin:password@localhost:27018/?authSource=admin")
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