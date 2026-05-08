import axios from "axios";

const BASE_URL = "http://localhost:5050/api/v1"
console.log(BASE_URL)

const callApi = async function(method, url, data){
    try {
        const response = await axios({
            method: method,
            url: `${BASE_URL}${url}`,
            data: data,
            headers: data instanceof FormData ? {} : {"Content-Type": "application/json"},
            withCredentials: true
        })
        
    return response

    } catch (error) {
        if(error.response){
            console.log("API Error:", error.response.data)
            throw error.response
        }
    }
}

export { callApi }