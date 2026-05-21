import { Router } from "express";
import { checkIsAdmin } from "../middlewares/checkAdmin.middleware.js";
import { getLeaves, updateLeaveStatus } from "../controllers/adminLeave.controller.js"

const router = Router()

router.route("/leaves").get(checkIsAdmin, getLeaves)
router.route("/update-status").patch(checkIsAdmin, updateLeaveStatus)

export default router