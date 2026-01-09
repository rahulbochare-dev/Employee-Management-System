import { Router } from "express";
import { registerUser } from "../Controllers/user.controller.js";
import { app } from "../../app.js";
import upload from "../Middleware/multer.middleware.js"

const router = Router()

router.route("/register").post(upload.files(
    [
        {
            name: avatar,
            maxCount: 1
        }
    ]
), registerUser)