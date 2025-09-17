import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop",
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    paymentType:{
        type: String,
        enum: ["COD", "ONLINE"],
        default: "COD",
        required: true,
    },
    productImg:{
        type:String,
        required: true
    },
    paymentStatus:{
        type: String,
        enum: ["PENDING", "COMPLETED"],
        default: "PENDING",
    },
    warrantyExpiry: { 
        type: Date,
        required: true,
    },
    qrCode: { 
        type: String,
        required: true,
    }
}, {timestamps: true});

const bookingModel = mongoose.model("Booking", bookingSchema);
export default bookingModel;
