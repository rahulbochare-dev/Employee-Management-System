import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./src/database/index.js";
import fs from "fs";

dotenv.config({
    path: "./.env"
})

if (!fs.existsSync("./public/temp")) {
  fs.mkdirSync("./public/temp", { recursive: true });
}

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening at port: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection failed!", error);
})