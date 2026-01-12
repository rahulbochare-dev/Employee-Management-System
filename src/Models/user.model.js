import { mongoose, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        lowerCase: true,
        index: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    avatar: {
        type: String,
        default: ""
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "admin"
    },
    password: {
        type: String,
        required: true
    },
    adminSecret: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    }
},
{
    timestamps: true
}
)

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.pre("save", async function(next){
    if(!this.isModified("adminSecret")) return next();

    this.adminSecret = await bcrypt.hash(this.adminSecret, 12)
    next()
})

userSchema.method.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.method.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.userName,

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.method.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)