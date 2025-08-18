import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  shopOwner: {
    typeof: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  logo: {
    typeof: String,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const shopModel = mongoose.model("Shop", shopSchema);

export default shopModel;
