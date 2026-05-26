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
    date.setDate(date.getDate() - 6)
    date.setHours(0, 0, 0, 0)

    const leastWeekLeaves = await Leave.aggregate([
        {
            $match: {
                status: "Approved",
                from: {
                    $gte: date,
                    $lte: new Date()
                }
            }
        },
        {
            $group: {
                _id: {
                    $dateToString: {
                        format: "%Y-%m-%d",
                        date: "$from"
                    }
                },
                total: {
                    $sum: 1
                }
            }
        }
    ])

    const last7Days = []
    const currentDate = new Date()

    for (let i = 6; i >= 0; i--) {
        const date = new Date()

        date.setDate(currentDate.getDate() - i)

        last7Days.push({
            fullDate: date.toISOString().split("T")[0],

            day: date.toLocaleString("default", {
                weekday: "short"
            })
        })
    }

    const lastWeekLeavesformatted = last7Days.map((dayData) => {
        const foundDay = leastWeekLeaves.find(
            (value) => value._id === dayData.fullDate
        )

        return {
            day: dayData.day,
            leaves: foundDay ? foundDay.total : 0
        }
    })

    res.status(200).json(new ApiResponse(200, lastWeekLeavesformatted, "Least week leaves fetched successfully"))
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

    res.status(200).json(new ApiResponse(200, { "malePercent": malePercent, "femalePercent": femalePercent }, "Employee gender ratio percent fetched successfully"))
})

const averageEmployeeAge = asyncHandler( async (req, res) => {
    const averageEmployeesAge = await Employee.aggregate([
        {
            $project: {
                age: {
                    $subtract: [
                        { $year: "$$NOW" },
                        { $year: "$dateOfBirth" }
                    ]
                }
            }
        },
        {
            $group: {
                _id: null,
                averageAge: {
                    $avg: "$age"
                }
            }
        },
        {
            $project: {
                averageAge: {
                    $round: [ "$averageAge", 0 ]
                }
            }
        }
    ])

    res.status(200).json(new ApiResponse(200, averageEmployeesAge, "Employee gender ratio percent fetched successfully"))
})

const newJoinesByMonth = asyncHandler( async (req, res) => {
    const last12MonthsDate = new Date()
    last12MonthsDate.setMonth(last12MonthsDate.getMonth() - 11)
    
    const last12Months = []
    const currentDate = new Date()
    
    for (let i = 11; i >= 0; i--) {
        const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - i,
            1
        )

        last12Months.push({
            month: date.toLocaleString("default", {
                month: "short"
            }),
            year: date.getFullYear(),
            monthNumber: date.getMonth() + 1
        })
    }
    
    const joinesByMonth = await Employee.aggregate([
        {
            $match: {
                joinedAt: {
                    $gte: last12MonthsDate
                }
            }
        },
        {
            $group: {
                _id: {
                    month: { $month: "$joinedAt" },
                    year: { $year: "$joinedAt" }
                },
                totalJoines: {
                    $sum: 1
                }
            }
        },
        {
            $sort: {
                "_id.year": 1,
                "_id.month": 1
            }
        }
    ])

    const newJoinesByMonthFormatted = last12Months.map((monthData) => {
        const foundMonth = joinesByMonth.find(
            (value) => value._id.month === monthData.monthNumber &&
            value._id.year === monthData.year
        )

        return {
            month: monthData.month,
            joinings: foundMonth? foundMonth.totalJoines : 0
        }
    })

    const totalJoinings = newJoinesByMonthFormatted.reduce(
        (acc, value) => acc + value.joinings, 0
    )
    
    const averageJoiningsPerMonth = Math.round(totalJoinings / newJoinesByMonthFormatted.length)
    
    res.status(200).json(new ApiResponse(200, {newJoinesByMonthFormatted, averageJoiningsPerMonth}, "New joines by month fetched successfully"))
})

export { getEmployeeGenderRatio, getPendingLeaveApplications, getOnLeaveToday, getNewJoinesThisMonth, getLastWeeksLeaves, mostEmployeesFromCountry, totalPayrollThisMonth, employeeGenderRatio, averageEmployeeAge,newJoinesByMonth }