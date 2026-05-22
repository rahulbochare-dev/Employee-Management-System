import { Router } from "express";
import { checkIsAdmin } from "../middlewares/checkAdmin.middleware.js";
import { getLeaves, getLeavesDetails, updateLeaveStatus } from "../controllers/adminLeave.controller.js"

const router = Router()

router.route("/leaves").get(checkIsAdmin, getLeaves)
router.route("/update-status").patch(checkIsAdmin, updateLeaveStatus)
router.route("/leave").get(checkIsAdmin, getLeavesDetails)

export default router