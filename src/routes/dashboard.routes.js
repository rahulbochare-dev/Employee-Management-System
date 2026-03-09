import { Router } from "express";
import { checkIsAdmin } from "../middlewares/checkAdmin.middleware.js";
import { getEmployeeGenderRatio } from "../controllers/dashboard.controller.js";

const router = Router()

router.route("/employeeGenderRatio").get(checkIsAdmin, getEmployeeGenderRatio)

export default router