import { callApi } from "../utils/callAPI.js";

const getMyLeaves = function async(){
    const response = callApi("GET", `/leave/leaves`)
    return response
}

export { getMyLeaves }