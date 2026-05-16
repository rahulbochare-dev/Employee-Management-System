import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Employee } from "../models/employee.model.js"

const onboardEmployee = asyncHandler( async (req, res) => {
    const {empID, firstName, middleName, lastName, email, gender, contactNo, avatar, dateOfBirth, country, city, postalCode, education, address, role, jobTitle, workMode, empType, salary, salaryCurrency, password} = req.body
    
    if(
        [empID, firstName, middleName, lastName, email, gender, contactNo, avatar, dateOfBirth, country, city, postalCode, education, address, role, jobTitle, workMode, empType, salary, salaryCurrency, password].some((fields) => (fields === ""))
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

    const currentDate = new Date()
    currentDate.toISOString

    const createdEmployee = await Employee.create({
        empID,
        firstName,
        middleName,
        lastName,
        email: email.toLowerCase(),
        gender,
        contactNo,
        avatar,
        dateOfBirth,
        country,
        city,
        postalCode,
        education,
        address,
        role,
        jobTitle,
        workMode,
        empType,
        salary,
        salaryCurrency,
        password,
        isActive: true,
        joinedAt: currentDate,
    })

    return res.status(200)
    .json(
        new ApiResponse(200, createdEmployee, "Employee created successfully")
    )
})

const getEmployees = asyncHandler( async (req, res) => {
    const page = req.query.page || 1
    const limit = req.query.limit || 10
    console.log(page, limit)

    const offset = (page - 1) * limit
    const allEmployees = await Employee.find({}).select("-password -refreshToken")
    .sort({createdAt: -1})
    .skip(offset)
    .limit(limit)

    const totalNoOfEmployees = await Employee.countDocuments({})
    const totalPages = Math.ceil(totalNoOfEmployees / limit)
    
    return res.status(200)
    .json(new ApiResponse(200, {employees: allEmployees, totalEmployeesCount: totalNoOfEmployees, currentPage: Number(page), totalPages}, "Employees fetched succesfully"))
})

const terminateEmployee = asyncHandler( async (req, res) => {
    const id = req.body.id

    const terminatedEmployee = await Employee.findByIdAndUpdate(id, {isActive: false}, {new: true}).select("-password -refreshToken")

    return res.status(200)
    .json(new ApiResponse(200, {terminateEmployee: terminatedEmployee}, "Employee terminated successfully"))
})

const getEmployeeByFilter = asyncHandler( async (req, res) => {
    const {gender, workMode, role} =req.query

    let filterParams = {};

    if(gender) filterParams.gender = gender
    if(workMode) filterParams.workMode = workMode
    if(role) filterParams.role = {$regex: role, $options: "i"}
    console.log(filterParams.gender);
    

    const employeeFound = await Employee.find(filterParams).select("-password -refreshToken")

    return res.status(200)
    .json(new ApiResponse(200, employeeFound, "Employees fetched by filter successfully"))
})

const getEmployeeBySalary = asyncHandler( async (req,res) => {
    const {minSalary, maxSalary} = req.query

    if(!minSalary || !maxSalary){
        throw new ApiError(400, "Salary values are required!")
    }

    const employeeFound = await Employee.find({salary: {$gte: minSalary, $lte: maxSalary}})

    if(employeeFound.length === 0){
        throw new ApiError(404, "Employee not found!")
    }

    return res.status(200).json(new ApiResponse(200, {employees: employeeFound}, "Employee fetched by salary successfully"))
})

const searchEmployee = asyncHandler( async (req, res) => {
    const {searchName} = req.query

    const employeeFound = await Employee.find({
        $or: [
            {
                firstName: {
                    $regex: searchName,
                    $options: "i"
                }
            },
            {
                lastName: {
                    $regex: searchName,
                    $options: "i"
                }
            }
        ]
    }).select("-password -refreshToken")

    return res.status(200).json(new ApiResponse(200, {employee: employeeFound}, "Employee searched successfully"))
})

export { onboardEmployee, getEmployees, terminateEmployee, getEmployeeByFilter, getEmployeeBySalary, searchEmployee }