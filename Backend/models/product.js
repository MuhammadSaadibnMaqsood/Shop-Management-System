import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    warranty: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    brand: {
      type: String,
      trim: true,
    },
    images: [
      {
        type: String, 
        required: false,
      },
    ],
    shopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop", 
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    ratings: {
      type: Number,
      default: 0,
    },
   
  },
  { timestamps: true } 
);

const productModel =  mongoose.model("Product", productSchema);


export default productModel;