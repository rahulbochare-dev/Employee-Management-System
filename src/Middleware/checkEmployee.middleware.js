import  jwt  from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.js"
import { Employee } from "../Models/employee.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const checkIsEmployee = asyncHandler( async (req, res, next) => {
    
})

export { checkIsEmployee }