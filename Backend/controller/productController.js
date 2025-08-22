import express from "express";
import shopModel from "../models/shop.js";
import productModel from "../models/product.js";


// FUNCTION TO CREATE PRODUCT 
export async function createProduct(req, res) {
  try {
    const { productName, price, description, category, stock, brand } =
      req.body;

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

    if (price <= 0 || stock < 0) {
      return res
        .status(400)
        .json({
          message: "Price must be greater than 0 and stock cannot be negative",
        });
    }

    const images = req.files?.map((file) => file.path) || [];

    //finding shop id

    const shopOwner = await shopModel.findOne({ shopOwner: req.user._id });
    if (!shopOwner) {
      return res.status(404).json({ message: "Shop not found" });
    }
    const shopId = shopOwner._id;

    const newProduct = await productModel.create({
      productName,
      price,
      description,
      category,
      stock,
      brand,
      images,
      shopId,
      ownerId: req.user._id,
    });

    return res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
// FUNCTION TO GET ALL PRODUCTS 
export async function getAllProducts(req,res) {

    try {
        
    } catch (error) {
        
    }
    
}
