import { callApi } from "../utils/callAPI.js";

const onboardEmployee = function async(data){
    const response = callApi("POST", "/admin/employee/onboard-employee", data)
    return response
}

export { onboardEmployee }