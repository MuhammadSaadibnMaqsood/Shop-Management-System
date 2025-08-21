import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
  shopOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
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
