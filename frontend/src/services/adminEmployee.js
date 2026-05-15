import { callApi } from "../utils/callAPI.js";

const onboardEmployee = function async(data){
    const response = callApi("POST", "/admin/employee/onboard-employee", data)
    return response
}

const getEmployees = function async(page = 1, limit = 20){
    const response = callApi("GET", `/admin/employee/employees?page=${page}&limit=${limit}`)
    return response
}

const searchEmployee = function async(firstName, lastName){
    const response = callApi("GET", `/admin/employee/search-employee?firstName=${firstName}&lastName=${lastName}`)
    return response
}

const getEmployeeBySalary = function async(minSalary, maxSalary){
    const response = callApi("GET", `/admin/employee/employee-by-salary?minSalary=${minSalary}&maxSalary=${maxSalary}`)
    return response
}

const getEmployeeByFilter = function async(params){
    const response = callApi("GET", `/admin/employee/employee-by-filter/?${params}`)
    return response
}

export { onboardEmployee, getEmployees, searchEmployee, getEmployeeBySalary, getEmployeeByFilter }