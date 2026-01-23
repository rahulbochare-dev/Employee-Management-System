import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Employee } from "../Models/employee.model.js"

const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        
        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken()
        
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
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
    if(!password.length < 8){
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
})

export { loginEmployee }