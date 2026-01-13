import { Router } from "express";
import { registerUser, loginUser } from "../Controllers/user.controller.js";
import { upload } from "../Middleware/multer.middleware.js"
import { protectAdminRegister } from "../Middleware/protectAdminRegister.js";

const router = Router()

router.route("/register").post(upload.fields(
    [
        {
            name: "avatar",
            maxCount: 1
        }
    ]
),protectAdminRegister, registerUser)

router.route("/login").post(loginUser)

export default router