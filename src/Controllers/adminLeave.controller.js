import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Leave } from "../Models/leave.model.js"

const updateLeaveStatus = asyncHandler( async (req, res) => {
    const {leaveId, status} = req.query

    if([leaveId, status].some((fields) => (fields.trim() === ""))){
        throw new ApiError(400, "Empty fields are not accepted!")
    }

    const leaveInDB = await Leave.findById(leaveId)
    
    if(!leaveInDB){
        throw new ApiError(404, "Leave does not exists!")
    }

    if(leaveInDB.status === status){
        throw new ApiError(400, "Leave already updated!")
    }

    leaveInDB.status = status
    const upadtedLeave = await leaveInDB.save({validateBeforeSave: false})

    return res.status(200).json(new ApiResponse(200, {leave: upadtedLeave}, "Leave updated successfully"))

})

export { updateLeaveStatus }