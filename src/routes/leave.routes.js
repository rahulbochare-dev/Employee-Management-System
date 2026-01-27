import { Router } from "express";
import { checkIsEmployee } from "../Middleware/checkEmployee.middleware.js";
import { addLeave } from "../Controllers/leave.controller.js"
import router from "./employee.routes.js";

router.route("/add-leave").post(checkIsEmployee, addLeave)

export default router