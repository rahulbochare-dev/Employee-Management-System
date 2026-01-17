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

    const avatarUploadResponse = await uploadOnCloudinary(avatarLocalPath)

    if(!avatarUploadResponse){
        throw new ApiError(409, "An error occured while uploading avatar!")
    }

    const createdEmployee = await Employee.create({
        empID,
        firstName,
        lastName,
        email: email.toLowerCase(),
        gender,
        contactNo,
        workMode,
        avatar,
        dateOfBirth,
        country,
        city,
        pinCode,
        address,
        role,
        isActive,
        salary,
        salaryCurrency,
        joinedAt,
        password
    })

    return res.status(200)
    .json(
        new ApiResponse(200, createdEmployee, "Employee created successfully")
    )
})

const getEmployees = asyncHandler( async (req, res) => {
    const allEmployees = await Employee.find({}).select("-password -refreshToken")
    
    return res.status(200)
    .json(new ApiResponse(200, foundEmployee, "Employees fetched succesfully"))
})

const terminateEmployee = asyncHandler( async (req, res) => {
    const id = req.body.id

    const terminatedEmployee = await Employee.findByIdAndUpdate(id, {isActive: false}, {new: true}).select("-password -refreshToken")

    return res.status(200)
    .json(new ApiResponse(200, {terminatedEmployee}, "Employee terminated successfully"))
})

export { onboardEmployee, getEmployees, terminateEmployee }