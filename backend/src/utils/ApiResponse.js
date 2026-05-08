class ApiResponse{
    constructor(
        statusCode,
        data,
        messege
    ){
        this.success = true
        this.statusCode = statusCode
        this.messege = messege
        this.data = data
    }
}

export { ApiResponse }