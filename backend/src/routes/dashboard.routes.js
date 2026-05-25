import { Router } from "express";
import { checkIsAdmin } from "../middlewares/checkAdmin.middleware.js";
import { getEmployeeGenderRatio, getLastWeeksLeaves, getNewJoinesThisMonth, getOnLeaveToday, getPendingLeaveApplications, mostEmployeesFromCountry, totalPayrollThisMonth } from "../controllers/dashboard.controller.js";

const router = Router()

router.route("/employee-gender-ratio").get(checkIsAdmin, getEmployeeGenderRatio)
router.route("/pending-leave-applications").get(checkIsAdmin, getPendingLeaveApplications)
router.route("/on-leave-today").get(checkIsAdmin, getOnLeaveToday)
router.route("/new-joines").get(checkIsAdmin, getNewJoinesThisMonth)
router.route("/last-week-leaves").get(checkIsAdmin, getLastWeeksLeaves)
router.route("/most-employees-country").get(checkIsAdmin, mostEmployeesFromCountry)
router.route("/total-payroll").get(checkIsAdmin, totalPayrollThisMonth)

export default router