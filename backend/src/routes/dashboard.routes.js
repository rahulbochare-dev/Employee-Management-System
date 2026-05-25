import { Router } from "express";
import { checkIsAdmin } from "../middlewares/checkAdmin.middleware.js";
import { getEmployeeGenderRatio, getLastWeeksLeaves, getNewJoinesThisMonth, getOnLeaveToday, getPendingLeaveApplications, mostEmployeesFromCountry, totalPayrollThisMonth, employeeGenderRatio, averageEmployeeAge, newJoinesByMonth } from "../controllers/dashboard.controller.js";

const router = Router()

router.route("/employee-gender-ratio").get(checkIsAdmin, getEmployeeGenderRatio)
router.route("/on-leave-today").get(checkIsAdmin, getOnLeaveToday)
router.route("/new-joines").get(checkIsAdmin, getNewJoinesThisMonth)
router.route("/pending-leave-applications").get(checkIsAdmin, getPendingLeaveApplications)
router.route("/last-week-leaves").get(checkIsAdmin, getLastWeeksLeaves)
router.route("/most-employees-country").get(checkIsAdmin, mostEmployeesFromCountry)
router.route("/total-payroll").get(checkIsAdmin, totalPayrollThisMonth)
router.route("/employee-gender-ratio-percent").get(checkIsAdmin, employeeGenderRatio)
router.route("/average-employee-age").get(checkIsAdmin, averageEmployeeAge)
router.route("/new-joines-by-month").get(checkIsAdmin, newJoinesByMonth)

export default router