import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Employee } from "../Models/employee.model.js"

const onboardEmployee = asyncHandler( async (req, res) => {
    const {empID, firstName, lastName, email, gender, contactNo, workMode, avatar, dateOfBirth, country, city, pinCode, address, role, isActive, salary, salaryCurrency, joinedAt, password} = req.body
    
    if(
        [empID, firstName, lastName, email, gender, contactNo, workMode, avatar, dateOfBirth, country, city, pinCode, address, role, isActive, salary, salaryCurrency, joinedAt, password].some((fields) => (fields === ""))
    ){
        throw new ApiError(400, "Empty fields are not accepted!")
    }

    if(password.length < 8){
        throw new ApiError(400, "Password length must be minimum of 8 charecters!")
    }
    
    if(!email.includes("@")){
        throw new ApiError(400, "Please enter a valid email!")
    }

    const alreadyExistEmployee = await Employee.findOne({email}).lean()
    
    if(alreadyExistEmployee){
        throw new ApiError(400, "Employee already exists!")
    }

    const avatarLocalPath = req.files?.avatar[0].path
    
    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar is required!")
    }
})

export { onboardEmployee }