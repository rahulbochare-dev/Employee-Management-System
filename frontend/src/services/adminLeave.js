import { callApi } from "../utils/callAPI.js";

const getLeaves = function async(status){
    const response = callApi("POST", `/admin/leave/leaves?status=${status}`)
    return response
}

export { getLeaves }