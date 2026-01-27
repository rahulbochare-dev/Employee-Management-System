import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Leave } from "../Models/leave.model.js"

const addLeave = asyncHandler( async (req, res) => {
    const {leaveType, description, from, to} = req.body

    if(
        [leaveType, description, from, to].some((fields) => (fields.trim() === ""))
    ){
        throw new ApiError(400, "Empty fields are not accepted!")
    }

    if(description.length < 50){
        throw new ApiError(400, "Description must be at least 50 charecters long!")
    }

})

export { addLeave }