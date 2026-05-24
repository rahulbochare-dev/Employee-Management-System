import { callApi } from "../utils/callAPI.js";

const login = async function(data){
    const response = await callApi("POST", "/employee/login", data)
    return response
}

const logout = async function(data){
    const response = await callApi("POST", "/employee/logout", data)
    return response
}

const getCurrentEmployee = async function(){
    const response = await callApi("GET", "/employee/employee-details")
    return response
}

export { login, logout, getCurrentEmployee }