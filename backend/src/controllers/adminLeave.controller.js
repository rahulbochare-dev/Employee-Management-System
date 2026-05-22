import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Leave } from "../models/leave.model.js"

const getLeaves = asyncHandler( async (req, res) => {
    const filter = {}

    if(req.query.status !== "undefined"){
        filter.status = req.query.status
    }
    
    const totalLeaves = await Leave.find(filter).populate("employee", "avatar firstName lastName empID jobTitle workMode email")
    console.log(filter)
    
    res.status(200).json(new ApiResponse(200, totalLeaves, "Leaves fetched successfully"))
})

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

const getLeavesDetails = asyncHandler( async (req, res) => {
    const id = req.query

    const leaveDetails = await Leave.findById({id}).populate("Employee", "avatar firstName lastName empID jobTitle workMode email")

    if(!leaveDetails){
        throw new ApiError(404, "Leave no found!")
    }

    res.status(200).json(new ApiResponse(200, leaveDetails, "Leave details fetched successfully"))
})

export { getLeaves, updateLeaveStatus }