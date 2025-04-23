import mongoose from "mongoose";

const partnershipLeadSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // basic email validation
    },
    country: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        match: /^\+?[0-9]{7,15}$/, // accepts international format
    },
    yourProfile: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        default: '',
        trim: true,
    },
}, { timestamps: true });

const Partnership = mongoose.model("PartnershipLead", partnershipLeadSchema);
export default Partnership
