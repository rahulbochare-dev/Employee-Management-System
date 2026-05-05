import { callApi } from "../utils/callAPI.js";

const signup = async function(data){
    const response = await callApi("GET", "/signup", data)
    return response
}

const login = async function(data){
    const response = await callApi("POST", "/login", data)
    return response
}

export { signup, login }