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
    .json(new ApiResponse(200, allEmployees, "Employees fetched succesfully"))
})

const terminateEmployee = asyncHandler( async (req, res) => {
    const id = req.body.id

    const terminatedEmployee = await Employee.findByIdAndUpdate(id, {isActive: false}, {new: true}).select("-password -refreshToken")

    return res.status(200)
    .json(new ApiResponse(200, {terminatedEmployee}, "Employee terminated successfully"))
})

const getEmployeeByFilter = asyncHandler( async (req, res) => {
    const {empID, email, gender, workMode, country, city, pinCode, role} =req.query

    let filterParams = {};
    
    if(empID) filterParams.empID = {$regex: empID, $options: "i"}
    if(email) filterParams.email = {$regex: email, $options: "i"}
    if(gender) filterParams.gender = {$regex: gender, $options: "i"}
    if(workMode) filterParams.workMode = {$regex: workMode, $options: "i"}
    if(country) filterParams.country = {$regex: country, $options: "i"}
    if(city) filterParams.city = {$regex: city, $options: "i"}
    if(pinCode) filterParams.pinCode = {$regex: pinCode, $options: "i"}
    if(role) filterParams.role = {$regex: role, $options: "i"}

    const employeeFound = await Employee.find(filterParams).select("-password -refreshToken")

    return res.status(200)
    .json(new ApiResponse(200, employeeFound, "Employees fetched by filter successfully"))
})

const searchEmployee = asyncHandler( async (req, res) => {
    const {firstName, lastName} = req.query

    let searchParams = {};

    if(firstName) searchParams.firstName = {$regex: firstName, $options: "i"}
    if(lastName) searchParams.lastName = {$regex: lastName, $options: "i"}

    const employeeFound = await Employee.find(searchParams).select("-password -refreshToken")

    return res.status(200).json(new ApiResponse(200, {employee: employeeFound}, "Employee searched successfully"))
})

export { onboardEmployee, getEmployees, terminateEmployee, getEnployeeBySalary, searchEmployee }