import { Router } from "express";
import { checkIsAdmin } from "../middlewares/checkAdmin.middleware.js";
import { getEmployeeGenderRatio, getNewJoinesThisMonth, getOnLeaveToday, getPendingLeaveApplications } from "../controllers/dashboard.controller.js";

const router = Router()

router.route("/employee-gender-ratio").get(checkIsAdmin, getEmployeeGenderRatio)
router.route("/pending-leave-applications").get(checkIsAdmin, getPendingLeaveApplications)
router.route("/on-leave-today").get(checkIsAdmin, getOnLeaveToday)
router.route("/new-joines").get(checkIsAdmin, getNewJoinesThisMonth)

export default router