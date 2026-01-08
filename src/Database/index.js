import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

const connectDB = async() => {
    try {
        const dbConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Database connected successfully! DB Host: ${dbConnectionInstance.connection.host}`);
    } catch (error) {
        console.log("DB connection failed!", error);
        process.exit(1)
    }
}

export { connectDB }