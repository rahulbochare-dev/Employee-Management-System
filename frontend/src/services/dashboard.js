import { callApi } from "../utils/callAPI.js";

const getTotalEmployees = async function(){
    const response = await callApi("GET", "/admin/dashboard/employee-gender-ratio")
    return response
}

const getOnLeaveToday = async function(){
    const response = await callApi("GET", "/admin/dashboard/on-leave-today")
    return response
}

const getNewJoines = async function(){
    const response = await callApi("GET", "/admin/dashboard/new-joines")
    return response
}

const getPendingLeave = async function(){
    const response = await callApi("GET", "/admin/dashboard/pending-leave-applications")
    return response
}

const getLastWeeksLeaves = async function(){
    const response = await callApi("GET", "/admin/dashboard/last-week-leaves")
    return response
}

const getMostEmployeeCountry = async function(){
    const response = await callApi("GET", "/admin/dashboard/most-employees-country")
    return response
}

const getTotalPayrollThisMonth = async function(){
    const response = await callApi("GET", "/admin/dashboard/total-payroll")
    return response
}

const getEmployeeGenderRatioPercent = async function(){
    const response = await callApi("GET", "/admin/dashboard/employee-gender-ratio-percent")
    return response
}

const getAverageEmployeeAge = async function(){
    const response = await callApi("GET", "/admin/dashboard/average-employee-age")
    return response
}

const getNewJoinesByMonth = async function(){
    const response = await callApi("GET", "/admin/dashboard/new-joines-by-month")
    return response
}

export { getTotalEmployees, getOnLeaveToday, getNewJoines, getPendingLeave, getLastWeeksLeaves, getMostEmployeeCountry, getTotalPayrollThisMonth, getEmployeeGenderRatioPercent, getAverageEmployeeAge, getNewJoinesByMonth }