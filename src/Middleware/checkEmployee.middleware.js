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
    
        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        
        if(!decodedToken){
            throw new ApiError(404, "Invalid access token!")
        }

        const employee = await Employee.findById(decodedToken._id).select("-password -refreshToken")
    
        if(req.cookies.role !== "employee"){
            throw new ApiError(401, "You dont have employee access!")
        }
        console.log(req.cookies.role)
    
        req.employee = employee
        next()
        
    } catch (error) {
        throw new ApiError(401, error)
    }
})

export { checkIsEmployee }