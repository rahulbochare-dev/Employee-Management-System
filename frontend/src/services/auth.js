import { callApi } from "../utils/callAPI.js";

const signup = async function(data){
    const response = await callApi("POST", "/user/register", data)
    return response
}

const login = async function(data){
    const response = await callApi("POST", "/user/login", data)
    return response
}

const logout = async function(data){
    const response = await callApi("POST", "/user/login", data)
    return response
}

export { signup, login, logout }