import { mongoose, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { type } from "os";

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
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    timezone: {
        type: String,
        default: "UTC"
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

userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 12)
})

userSchema.pre("save", async function(){
    if(!this.isModified("adminSecret")) return;

    this.adminSecret = await bcrypt.hash(this.adminSecret, 12)
})

userSchema.method.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.method.isAdminSecretCorrect = async function(adminSecret){
    return await bcrypt.compare(adminSecret, this.adminSecret)
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