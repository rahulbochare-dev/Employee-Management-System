import { Router } from "express";
import { upload } from "../Middleware/multer.middleware.js"
import { onboardEmployee, getEmployees, terminateEmployee, getEnployeeBySalary, searchEmployee } from "../Controllers/adminEmployee.controller.js"
import { checkIsAdmin } from "../Middleware/checkAdmin.middleware.js";

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
router.route("/employee-by-filter").get(checkIsAdmin, getEnployeeBySalary)
router.route("/search-employee").get(checkIsAdmin, searchEmployee)

export default router