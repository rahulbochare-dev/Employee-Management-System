import { Router } from "express";
import { checkIsEmployee } from "../Middleware/checkEmployee.middleware.js";
import { addLeave, getLeaves } from "../Controllers/employeeLeave.controller.js"

const router = Router()

router.route("/add-leave").post(checkIsEmployee, addLeave)
router.route("/leaves").post(checkIsEmployee, getLeaves)

export default router