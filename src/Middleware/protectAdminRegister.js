import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../Models/user.model.js"
import { ApiError } from "../utils/ApiError.js"

const protectAdminRegister = asyncHandler(async (req, res, next)=>{
    const adminInDB = await User.countDocuments({})
    
    if(adminInDB > 0){
        throw new ApiError(409, "Admin already exists, you cant become admin!")
    }
    next()
})

export { protectAdminRegister }