import { Router } from "express";
import { checkIsEmployee } from "../middlewares/checkEmployee.middleware.js";
import { addLeave, getLeaves, getLeaveDetails, deleteLeave } from "../controllers/employeeLeave.controller.js"

const router = Router()

router.route("/add-leave").post(checkIsEmployee, addLeave)
router.route("/leaves").get(checkIsEmployee, getLeaves)
router.route("/leave-details").get(checkIsEmployee, getLeaveDetails)
router.route("/delete-leave").get(checkIsEmployee, deleteLeave)

export default router