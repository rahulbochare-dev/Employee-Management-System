import { Router } from "express";
import { upload } from "../Middleware/multer.middleware.js"
import { onboardEmployee } from "../Controllers/adminEmployee.controller.js"

const router = Router()

router.route("/onboard-employee").post(upload.fields(
    [
        {
            name: "avatar",
            maxCount: 1
        }
    ]
))

export default router