import { mongoose, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const employeeSchema = new Schema({
    employee: {
        type: Schema.Types.ObjectId,
        ref: "Employee",
    },
    leaveType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    from: {
        type: Date,
        required: true,
    },
    to: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected", "On-going", "Ended"],
        default: "Pending",
        required: true
    }
},
{
    timestamps: true
}
)