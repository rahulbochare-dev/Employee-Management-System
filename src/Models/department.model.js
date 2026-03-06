import mongoose, { Mongoose, Schema } from "mongoose";

const departmentSchema = new Schema({
    departmentName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    departmentCode: {
        type: String,
        required: true,
        unique: true,
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        default: null
    },
    totalEmployees: {
        type: Number,
        default: 0
    }
})

export const Department = mongoose.models.Department || mongoose.model("Department", departmentSchema)