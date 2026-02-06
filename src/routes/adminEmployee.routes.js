import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js"
import { onboardEmployee, getEmployees, terminateEmployee, getEmployeeByFilter, searchEmployee, getEmployeeBySalary } from "../controllers/adminEmployee.controller.js"
import { checkIsAdmin } from "../middlewares/checkAdmin.middleware.js";

const router = Router()

router.route("/onboard-employee").post(upload.fields(
    [
        {
            name: "avatar",
            maxCount: 1
        }
    ]
), checkIsAdmin, onboardEmployee)

router.route("/employees").get(checkIsAdmin, getEmployees)
router.route("/terminate-employee").post(checkIsAdmin, terminateEmployee)
router.route("/employee-by-filter").get(checkIsAdmin, getEmployeeByFilter)
router.route("/employee-by-salary").get(checkIsAdmin, getEmployeeBySalary)
router.route("/search-employee").get(checkIsAdmin, searchEmployee)

export default router