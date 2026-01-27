import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import userRouter from "./src/routes/user.routes.js";
import adminEmployeeRouter from "./src/routes/adminEmployee.routes.js"
import employeeRouter from "./src/routes/employee.routes.js"
import leaveRouter from "./src/routes/leave.routes.js"

app.use("/api/v1/user", userRouter)
app.use("/api/v1/admin/employee", adminEmployeeRouter)
app.use("/api/v1/employee", employeeRouter)
app.use("/api/v1/leave", leaveRouter)

export { app }