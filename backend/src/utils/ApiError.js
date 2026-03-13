class ApiError extends Error{
    constructor(
        errorCode,
        messege = "Something went wrong!"
    ){
        super(messege)
        this.errorCode = errorCode,
        this.messege = messege
    }
}

export { ApiError }