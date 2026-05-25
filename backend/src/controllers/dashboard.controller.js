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

const mostEmployeesFromCountry = asyncHandler( async (req, res) => {
    const countryEmployee = await Employee.aggregate([
        {
            $group: {
                _id: "$country",
                totalEmployees: {
                    $sum: 1
                }
            }
        },
        {
            $sort: {
                totalEmployees: -1
            }
        },
        {
            $limit: 1
        }
    ])

    const mostEmployeeCountry = countryEmployee[0]._id
    const mostEmployeeCountryNo = countryEmployee[0].totalEmployees
    const totalEmployees = await Employee.countDocuments()
    const mostEmployeeCountryPercent = Math.round((mostEmployeeCountryNo / totalEmployees) * 100)

    res.status(200).json(new ApiResponse(200, {mostEmployeeCountry, mostEmployeeCountryPercent}, "Employee percent by country fetched successfully"))
})

const totalPayrollThisMonth = asyncHandler( async (req, res) => {
    const totalPayroll = await Employee.aggregate([
        {
            $project: {
                monthlySalary: {
                    $divide: ["$salary", 12]
                }
            }
        },
        {
            $group: {
                _id: null,
                monthlySalary: {
                    $sum: "$monthlySalary"
                }
            }
        }
    ])

    const employee = await Employee.findOne()
    const salaryCurrency = await employee.salaryCurrency
    const totalPayrollThisMonth = Math.round(totalPayroll[0].monthlySalary)
    
    res.status(200).json(new ApiResponse(200, {totalPayrollThisMonth, salaryCurrency}, "Total payroll fetched successfully"))
})

const employeeGenderRatio = asyncHandler( async (req, res) => {
    const genderRatio = await Employee.aggregate([
        {
            $group: {
                _id: "$gender",
                genderTotal: {
                    $sum: 1
                }
            }
        }
    ])

    const totalEmployeesCount = await Employee.countDocuments()
    const malePercent = Math.round(genderRatio[0].genderTotal / totalEmployeesCount * 100)
    const femalePercent = Math.round(genderRatio[1].genderTotal / totalEmployeesCount * 100)

    res.status(200).json(new ApiResponse(200, { "malePercent": malePercent, "femalePercent": femalePercent }))
})

export { getEmployeeGenderRatio, getPendingLeaveApplications, getOnLeaveToday, getNewJoinesThisMonth, getLastWeeksLeaves, mostEmployeesFromCountry, totalPayrollThisMonth, employeeGenderRatio }