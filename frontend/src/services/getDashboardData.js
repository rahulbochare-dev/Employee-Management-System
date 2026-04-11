import axios from "axios";

const callApi = function(method, url, data){
    try {
        const response = axios({
            method: method,
            url: `${ProcessingInstruction.e}`,
            data: data
        })
    
    } catch (error) {
        console.log(error)
    }
}