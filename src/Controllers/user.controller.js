import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../Models/user.model.js"
import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const registerUser = asyncHandler( async (req, res) => {
    const {firstName, lastName, userName, email, avatar, dob, role, password, adminSecret} = req.body

    if(
        [firstName, lastName, userName, email, avatar, dob, role, password, adminSecret].some((fields) =>{
            fields.trim() === ""
        })
    ){
        throw new ApiError(400, "All fields are required!")
    }

    const existedUser = await User.findOne({
        $:[{userName}, {email}]
    })

    if(existedUser){
        throw new ApiError(409, "User already exists!")
    }

    const avatarLocalPath = req.files?.avatar[0].path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar is required!")
    }

    const avatarUploadResponse = await uploadOnCloudinary(avatarLocalPath)

    if(!avatarUploadResponse){
        throw new ApiError(400, "An error occured while uploading avatar!")
    }

    const user = await User.create({
        firstName,
        lastName, 
        userName: userName.toLowercase(), 
        email, 
        avatar: avatarUploadResponse.url, 
        dob, 
        role, 
        password, 
        adminSecret
    })

    const createdUser = await user.findById(user._id).select(
        "-password -adminSecret -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while creating user!")
    }

    return res.status(200).json(
        new ApiResponse(200, createdUser, "User created successfully")
    )

})


export { registerUser }