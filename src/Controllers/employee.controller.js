import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Employee } from "../Models/employee.model.js"

const generateAccessTokenAndRefreshToken = async (empId) => {
    try {
        const employee = await Employee.findById(empId)
        
        const accessToken = await employee.generateAccessToken()
        const refreshToken = await employee.generateRefreshToken()
        
        employee.refreshToken = refreshToken
        await employee.save({validateBeforeSave: false})
        return {accessToken, refreshToken}
    
        
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating tokens!")
    }
}

const loginEmployee = asyncHandler( async (req, res) => {
    const {email, password} = req.body

    if(!email && !password){
        throw new ApiError(400, "Email and username is required!")
    }
    if(!email.includes("@")){
        throw new ApiError(400, "Please enter and valid email!")
    }
    if(password.length < 8){
        throw new ApiError(400, "Password must be 8 charecters long!")
    }

    const registerdEmployee = await Employee.findOne({email: email})

    if(!registerdEmployee){
        throw new ApiError(404, "Employee not found!")
    }

    const passwordCompareResult = await registerdEmployee.isPasswordCorrect(password)

    if(!passwordCompareResult){
        throw new ApiError(400, "Invalid password")
    }

    const {accessToken, refreshToken} = await generateAccessTokenAndRefreshToken(registerdEmployee._id)

    const loggedInEmployee = await Employee.findById(registerdEmployee._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .cookie("role", "employee", options)
    .json(new ApiResponse(200,
        {
            employee: loggedInEmployee, accessToken, refreshToken
        },
        "Employee logged in successfully"
    ))
})

const resetPassword = asyncHandler( async (req, res) => {
    const {email, oldPassword, newPassword} = req.body

    if(!oldPassword && !newPassword && !email){
        throw new ApiError(400, "All fields are required!")
    }

    if(!email.includes("@")){
        throw new ApiError(400, "Please enter a valid email!")
    }
    
    if((oldPassword.length && newPassword.length) < 8){
        throw new ApiError(400, "Passwords must be 8 charecters long!")
    }
    
    const loggedInEmployee = await Employee.findById(req.employee._id)

    const passwordCompareResult = await loggedInEmployee.isPasswordCorrect(oldPassword)
    
    if(!passwordCompareResult){
        throw new ApiError(400, "Invalid old password!")
    }

    loggedInEmployee.password = newPassword
    await loggedInEmployee.save({validateBeforeSave: false})

    return res.status(200).json(new ApiResponse(200, {}, "Password has changed successfully"))
})

const getCurrentEmployeeDetails = asyncHandler( async (req, res) => {
    return res.status(200).json(new ApiResponse(200, req.employee, "Employee fetched successfuly"))
})

const logoutEmployee = asyncHandler( async (req, res) => {
    return res.status(200)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .clearCookie("role")
    .json(new ApiResponse(200, {}, "Employee logged out successfully"))
})

export { loginEmployee, resetPassword, getCurrentEmployeeDetails, logoutEmployee }