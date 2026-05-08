class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong!"
    ){
        super(message)
        this.errorCode = statusCode,
        this.message = message
        this.success = false
    }
}

export { ApiError }