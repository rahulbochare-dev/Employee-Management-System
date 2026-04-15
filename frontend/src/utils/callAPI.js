import axios from "axios";

const BASE_URL = import.meta.env

const callApi = async function(method, url, data){
    try {
        const response = await axios({
            method: method,
            url: `${BASE_URL}${url}`,
            data: data,
            headers: data instanceof FormData ? {"Content-Type": "multipart/form-data"} : {"Content-Type": "application/json"}
        })

        if(method != "GET"){
            config.data = data
        }
        
    return response

    } catch (error) {
        console.log("apiError:", error)
    }
}

export { callApi }