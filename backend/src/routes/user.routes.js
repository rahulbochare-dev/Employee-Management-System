import { Router } from "express";
import { registerUser, loginUser, logoutUser, resetPassword } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { protectAdminRegister } from "../middlewares/protectAdminRegister.js";
import { verifyToken } from "../middlewares/auth.middleware.js"

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

// secured routes
router.route("/logout").post(verifyToken, logoutUser)
router.route("/reset-password").post(verifyToken, resetPassword)

export default router