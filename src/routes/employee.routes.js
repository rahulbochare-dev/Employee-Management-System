import { Router } from "express";
import { checkIsEmployee } from "../Middleware/checkEmployee.middleware.js";
import { loginEmployee, resetPassword, getCurrentEmployeeDetails } from "../Controllers/employee.controller.js"

const router = Router()

router.route("/login").post(loginEmployee)
router.route("/reset-password").post(checkIsEmployee, resetPassword)
router.route("/employee-details").post(checkIsEmployee, getCurrentEmployeeDetails)

export default router