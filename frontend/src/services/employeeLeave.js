import { callApi } from "../utils/callAPI.js";

const getMyLeaves = function async(){
    const response = callApi("GET", `/leave/leaves`)
    return response
}

const getLeaveDetails = function async(id){
    const response = callApi("GET", `/leave/leave-details?id=${id}`)
    return response
}

const applyLeave = async function(data){
    const response = await callApi("POST", "/leave/add-leave", data)
    return response
}

export { getMyLeaves, applyLeave, getLeaveDetails }