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

export { getTotalEmployees, getOnLeaveToday, getNewJoines, getPendingLeave }