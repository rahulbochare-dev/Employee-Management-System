import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./src/Database/index.js";

dotenv.config({
    path: "./.env"
})

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening at port: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection failed!", error);
})