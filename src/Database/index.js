import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected successfully!", DB_NAME)
    } catch (error) {
        console.log("DB connection failed!")
        process.exit(1)
    }
}

export { connectDB }