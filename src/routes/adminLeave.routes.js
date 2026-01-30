import { Router } from "express";
import { checkIsAdmin } from "../Middleware/checkAdmin.middleware.js";
import { updateLeaveStatus } from "../Controllers/adminLeave.controller.js"

const router = Router()

router.route("/update-status").post(checkIsAdmin, updateLeaveStatus)

export default router