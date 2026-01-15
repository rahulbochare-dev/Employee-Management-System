import { Router } from "express";
import { upload } from "../Middleware/multer.middleware.js"
import { onboardEmployee } from "../Controllers/adminEmployee.controller.js"
import { checkIsAdmin } from "../Middleware/checkAdmin.middleware.js";

const router = Router()

router.route("/onboard-employee").post(upload.fields(
    [
        {
            name: "avatar",
            maxCount: 1
        }
    ]
), checkIsAdmin, onboardEmployee)

export default router