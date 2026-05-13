import { callApi } from "../utils/callAPI.js";

const onboardEmployee = function async(data){
    const response = callApi("POST", "/admin/employee/onboard-employee", data)
    return response
}

const getEmployees = function async(page = 1, limit = 20){
    const response = callApi("GET", `/admin/employee/employees?page=${page}&limit=${limit}`)
    return response
}

export { onboardEmployee, getEmployees }