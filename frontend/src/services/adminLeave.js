import { callApi } from "../utils/callAPI.js";

const getLeaves = function async(status){
    const response = callApi("GET", `/admin/leave/leaves?status=${status}`)
    return response
}

export { getLeaves }