import { Router } from "express";
import { checkIsEmployee } from "../middlewares/checkEmployee.middleware.js";
import { addLeave, getLeaves, getLeaveDetails } from "../controllers/employeeLeave.controller.js"

const router = Router()

router.route("/add-leave").post(checkIsEmployee, addLeave)
router.route("/leaves").get(checkIsEmployee, getLeaves)
router.route("/leave-details").get(checkIsEmployee, getLeaveDetails)

export default router