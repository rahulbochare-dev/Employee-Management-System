import { mongoose, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const employeeSchema = new Schema({
    empID: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    gender: {
        type: String,
        required: true
    },

    contactNo: {
        type: Number,
        required: true
    },
    workMode: {
        type: String,
        required: true
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
    pinCode: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    joinedAt: {
        type: Date,
        required: true
    },
    password: {
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

employeeSchema.pre("save", async function(){
    if(!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 12)
})

employeeSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

employeeSchema.methods.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

employeeSchema.methods.generateRefreshToken = async function(){
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

export const Employee = mongoose.model("Employee", employeeSchema)