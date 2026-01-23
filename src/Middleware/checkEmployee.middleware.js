import  jwt  from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.js"
import { Employee } from "../Models/employee.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const checkIsEmployee = asyncHandler( async (req, res, next) => {
    try {
        const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if(!accessToken){
            throw new ApiError(401, "Unauthorized request!")
        }
    
        const decodedToken = jwt.sign(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const user = Employee.findOne(decodedToken._id).select("-password -refreshToken")
        
        if(!user){
            throw new ApiError(404, "Invalid access token!")
        }
    
        if(!user.role === "employee"){
            throw new ApiError(401, "You dont have employee access!")
        }
    
        req.user = user
        next()
        
    } catch (error) {
        throw new ApiError(401, "Something went wrong while parsing token!")
    }
})

export { checkIsEmployee }