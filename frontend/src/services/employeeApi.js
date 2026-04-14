import { callApi } from "../utils/callAPI.js";

const getEmployees = function(){
    const response = callApi("GET", "/admin/dashboard/employee-gender-ratio")
    return response
}

export { getEmployees }