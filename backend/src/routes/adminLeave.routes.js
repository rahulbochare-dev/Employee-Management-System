import { Router } from "express";
import { checkIsAdmin } from "../middlewares/checkAdmin.middleware.js";
import { updateLeaveStatus } from "../controllers/adminLeave.controller.js"

const router = Router()

router.route("/update-status").patch(checkIsAdmin, updateLeaveStatus)

export default router