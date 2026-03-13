import mongoose, { Mongoose, Schema } from "mongoose";

const organizationSchema = new Schema({
    organizationName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    timezone: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    establishedOn: {
        type: Date,
        required: true,
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},
{
    timestamps: true
})

export const Organization = mongoose.models.Department || mongoose.model("Organization", organizationSchema)