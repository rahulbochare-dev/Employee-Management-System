import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Employee } from "../Models/employee.model.js"

const onboardEmployee = asyncHandler( async (req, res) => {
    const {empID, firstName, lastName, email, gender, contactNo, workMode, avatar, dateOfBirth, country, city, pinCode, address, role, isActive, salary, joinedAt, password} = req.body
    
})

export { onboardEmployee }