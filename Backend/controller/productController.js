import productModel from "../models/product.js";
import shopModel from "../models/shop.js";
import bookingModel from "../models/booking.js";

export async function createProduct(req, res) {
  try {
    const {
      productName,
      price,
      description,
      category,
      warranty,
      stock,
      brand,
    } = req.body;

    if (
      !productName ||
      !price ||
      !description ||
      !category ||
      !stock ||
      !brand
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    console.log("➡️ req.body:", req.body);
    console.log("➡️ req.files:", req.files);

    if (price <= 0 || stock < 0) {
      return res.status(400).json({
        message: "Price must be greater than 0 and stock cannot be negative",
      });
    }

    // Multer-Cloudinary ne file URLs return kiye hain
    const images = req.files?.map((file) => file.path) || [];

    // Shop find karni
    const shopOwner = await shopModel.findOne({ shopOwner: req.user._id });
    if (!shopOwner) {
      return res.status(404).json({ message: "Shop not found" });
    }

    const newProduct = await productModel.create({
      productName,
      price,
      description,
      category,
      warranty,
      stock,
      brand,
      images,
      shopId: shopOwner._id,
      ownerId: req.user._id,
    });
    console.log("➡️ req.body:", req.body);
    console.log("➡️ req.files:", req.files);
    return res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.log("➡️ req.body:", req.body);
    console.log("➡️ req.files:", req.files);
    console.error("❌ Error creating product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// FUNCTION TO GET ALL PRODUCTS
export async function getAllProducts(req, res) {
  try {
    const allProduct = await productModel
      .find()
      .populate("ownerId", "userName email")
      .populate("shopId", "shopName address");

    return res.status(200).json(allProduct);
  } catch (error) {
    console.log("error in get all product function", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
// FUNCTION TO GET SPECIFIC PERSON/OWNER PRODUCTS
export async function getOwnerProducts(req, res) {
  try {
    const products = await productModel.find({ ownerId: req.user._id });
    return res.status(200).json(products);
  } catch (error) {
    console.log("error in get specific owner product function", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
//GET OWNER SOLD PRODUCTS ONLY

export async function getSoldProducts(req, res) {
  try {
    const shop = await shopModel.findOne({ shopOwner: req.user._id });
    const products = await bookingModel.find({ shop: shop._id }).populate("product");
    return res.status(200).json(products);
  } catch (error) {
    console.log("error in get sold products function", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
