import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Employee } from "../models/employee.model.js"

const getEmployeeGenderRatio = asyncHandler( async (req, res) => {
    const employeeRatio = await Employee.aggregate([{
        $group: {
            _id: "$gender",
            total: {
                $sum: 1
            }
        }
    }])

    if(!employeeRatio){
        throw new ApiError(400, "Employees now found!")
    }

    res.status(200).json(new ApiResponse(200, employeeRatio, "Employee ratio fetched succesfully"))
})

export { getEmployeeGenderRatio }