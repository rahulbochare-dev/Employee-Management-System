import { Router } from "express";
import { checkIsEmployee } from "../Middleware/checkEmployee.middleware.js";
import { loginEmployee } from "../Controllers/employee.controller.js"

const router = Router()