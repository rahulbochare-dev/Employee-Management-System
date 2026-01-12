import { Router } from "express";
import { registerUser } from "../Controllers/user.controller.js";
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

export default router