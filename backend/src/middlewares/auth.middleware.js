import  jwt  from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"

const verifyToken = async (req, res, next) => {
    try {
        const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ",  "")
        
        if(!accessToken){
            throw new ApiError(401, "Unauthorized request!")
        }
        
        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        
        const user = await User.findById(decodedToken?._id).select("-password -adminSecret -refreshToken")
    
        if(!user){
            throw new ApiError(401, "Invalid access token!")
        }
    
        req.user = user
        next()

    } catch (error) {
        throw new ApiError(401, "Something went wrong while parsing token!")
    }
}

export { verifyToken }