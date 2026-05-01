import { callApi } from "../utils/callAPI.js";

const getEmployees = async function(){
    const response = await callApi("GET", "/admin/dashboard/employee-gender-ratio")
    return response
}

getEmployees()

export { getEmployees }