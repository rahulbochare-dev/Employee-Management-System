import { callApi } from "../utils/callAPI.js";

const getLeaves = function async(){
    const response = callApi("GET", `/admin/leave/leaves`)
    return response
}

export { getLeaves }