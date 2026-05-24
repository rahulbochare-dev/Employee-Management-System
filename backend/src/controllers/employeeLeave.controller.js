import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Leave } from "../models/leave.model.js";

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

    const createdLeave = await Leave.create({
        employee: req.employee._id,
        leaveType: leaveType,
        description: description,
        from: from,
        to: to
    })

    res.status(200).json(new ApiResponse(200, {leave: createdLeave}, "Leave submitted successfully"))
})

const getLeaves = asyncHandler( async (req, res) => {
    const leaveInDB = await Leave.find({employee: req.employee._id}).populate("employee", "firstName lastName")

    res.status(200).json(new ApiResponse(200, {leaves: leaveInDB}, "Leaves fetched successfully"))
})

const getLeaveDetails = asyncHandler( async (req, res) => {
    const id = req.query.id

    const leaveInDB = await Leave.find({_id: id}).populate("employee", "avatar firstName lastName empID jobTitle workMode email")

    res.status(200).json(new ApiResponse(200, {leave: leaveInDB}, "Leaves details fetched successfully"))
})

export { addLeave, getLeaves, getLeaveDetails }