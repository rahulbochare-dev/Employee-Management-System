import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../Models/user.model.js"
import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        
        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken()
        
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
        return {accessToken, refreshToken}
    
        
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating tokens!")
    }
}

const registerUser = asyncHandler( async (req, res) => {
    const {firstName, lastName, userName, email, avatar, dateOfBirth, country, city, timezone, role, password, adminSecret} = req.body

    if(
        [firstName, lastName, userName, email, avatar, dateOfBirth, country, city, timezone, role, password, adminSecret].some((fields) => (fields?.trim() === ""))
    ){
        throw new ApiError(400, "All fields are required!")
    }

    if(password.length < 8){
        throw new ApiError(400, "Password must be 8 charecters long")
    }

    if(!email.includes("@")){
        throw new ApiError(400, "Email is not valid!")
    }

    const existedUser = await User.findOne({
        $or:[{userName}, {email}]
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
        userName: userName.toLowerCase(), 
        email, 
        avatar: avatarUploadResponse.url, 
        dateOfBirth, 
        country,
        city,
        timezone,
        role, 
        password, 
        adminSecret
    })

    const createdUser = await User.findById(user._id).select(
        "-password -adminSecret -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while creating user!")
    }

    return res.status(200).json(
        new ApiResponse(200, createdUser, "User created successfully")
    )

})

const loginUser = asyncHandler( async (req, res) => {
    const {userName, email, password} = req.body

    if(!(userName || email)){
        throw new ApiError(400, "Email or usename is required!")
    }

    if(!password){
        throw new ApiError(400, "Please enter password!")
    }

    const registerdUser = await User.findOne({
        $or: [{userName}, {email}]
    })

    if(!registerdUser){
        throw new ApiError(404, "User not found!")
    }

    const passwordCompareResult = await registerdUser.isPasswordCorrect(password)
    
    if(!passwordCompareResult){
        throw new ApiError(400, "Invalid password!")
    }

    const {accessToken, refreshToken} = await generateAccessTokenAndRefreshToken(registerdUser._id)
    
    const loggedInUser = await User.findById(registerdUser._id).select("-password -adminSecret -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200,
        {
            user: loggedInUser, accessToken, refreshToken
        },
        "User logged in successfully"
    ))
    
    
})

const logoutUser = asyncHandler( async (req, res,) => {
    const user = await User.findByIdAndUpdate(req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        }
    )
    console.log(user)

    const options = {
        httpOnly: true,
        secure: true
    }


    res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"))
    
})


export { registerUser, loginUser, logoutUser }