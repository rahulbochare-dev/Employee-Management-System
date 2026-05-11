import { callApi } from "../utils/callAPI.js";

const addEmployee = function async(data){
    const response = callApi("POST", "/admin/employee/onboard-employee", data)
    return response
}

export { addEmployee }