import { callApi } from "../utils/callAPI.js";

const getLeaves = function async(status){
    const response = callApi("GET", `/admin/leave/leaves?status=${status}`)
    return response
}

const getLeavesDetails = function async(id){
    const response = callApi("GET", `/admin/leave/leave?id=${id}`)
    return response
}

export { getLeaves, getLeavesDetails }