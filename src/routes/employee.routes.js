import { Router } from "express";
import { checkIsEmployee } from "../Middleware/checkEmployee.middleware.js";
import { loginEmployee, resetPassword, getCurrentEmployeeDetails, logoutEmployee } from "../Controllers/employee.controller.js"

const router = Router()

router.route("/login").post(loginEmployee)
router.route("/reset-password").patch(checkIsEmployee, resetPassword)
router.route("/employee-details").post(checkIsEmployee, getCurrentEmployeeDetails)
router.route("/logout").post(checkIsEmployee, logoutEmployee)

export default router