import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Employee } from "../models/employee.model.js"
import { Leave } from "../models/leave.model.js"

const getEmployeeGenderRatio = asyncHandler(async (req, res) => {
    const employeeRatio = await Employee.aggregate([{
        $facet: {
            "genderTotal": [{
                $group: {
                    _id: "$gender",
                    total: {
                        $sum: 1
                    }
                }
            }],
            "totalEmplyees": [{
                $count: "totalEmployees"
            }]
        }
    }])

    if (!employeeRatio) {
        throw new ApiError(400, "Employees not found!")
    }

    res.status(200).json(new ApiResponse(200, employeeRatio, "Employee ratio fetched succesfully"))
})

const getPendingLeaveApplications = asyncHandler(async (req, res) => {
    const pendingLeaveApplications = await Leave.aggregate([{
        $facet: {
            "catagoryTotal": [{
                $group: {
                    _id: "$leaveType",
                    total: {
                        $sum: 1
                    }
                }
            }],
            "allCatagoryTotal": [{
                $count: "totalLeaves"
            }]
        }
    }])

    if (!pendingLeaveApplications) {
        throw new ApiError(400, "Leaves not found!")
    }

    res.status(200).json(new ApiResponse(200, pendingLeaveApplications, "Pending leave applications fetched successfully"))
})

const getOnLeaveToday = asyncHandler(async (req, res) => {
    const today = Date()
    const onLeaveToday = await Leave.aggregate([{
        $match: {
            status: "Approved",
            from: { $lte: new Date() },
            to: { $gte: new Date() }
        }
    },
    {
        $facet: {
            "catagoryTotal": [{
                $group: {
                    _id: "$leaveType",
                    catagoryTotal: {
                        $sum: 1
                    }
                }
            }],
            "todayTotalLeaves": [{
                $count: "totalLeaves"
            }]
        }
    }])

    res.status(200).json(new ApiResponse(200, onLeaveToday, "Employees on leave today fetched successfully"))
})

const getNewJoinesThisMonth = asyncHandler(async (req, res) => {
    const newJoinesThisMonth = await Employee.aggregate([{
        $match: {
            $expr: {
                $and: {
                    $eq: [
                        { $month: "$joinedAt" },
                        { $month: new Date() }
                    ],
                    $eq: [
                        { $year: "$joinedAt" },
                        { $year: new Date() }
                    ]
                }
            }
        },
    },
    {
        $facet: {
            "genderWiseTotal": [{
                $group: {
                    _id: "$gender",
                    total: {
                        $sum: 1
                    }
                }
            }],
            "totalNewJoines": [{
                $count: "totalNewJoines"
            }]
        }
    }
])

    if(!newJoinesThisMonth){
        throw new ApiError(400, "New joines not found")
    }

    res.status(200).json(new ApiResponse(200, newJoinesThisMonth, "New joines this month fetched successfully"))
})

const getLastWeeksLeaves = asyncHandler( async (req, res) => {
    const date = new Date()
    date.setDate(date.getDate() - 7)
    date.setHours(0, 0, 0, 0)

    const leastWeekLeaves = await Leave.aggregate([{
        $match: {
            status: "Approved"
        },
        $match: {
            from: {
                $gte: date,
                $lte: new Date()
            }
        },
        $group: {
            _id: "$from",
            total: {
                $sum: 1
            }
        }
    }])

    res.status(200).json(new ApiResponse(200, leastWeekLeaves, "Least week leaves fetched successfully"))
})

export { getEmployeeGenderRatio, getPendingLeaveApplications, getOnLeaveToday, getNewJoinesThisMonth, getLastWeeksLeaves }