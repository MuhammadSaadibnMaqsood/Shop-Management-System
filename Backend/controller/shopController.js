import express from "express";
import shopModel from "../models/shop.js";

export async function createShop(req, res) {
  try {
    const { shopName, address, phone, description } = req.body;
    const shopOwner = req.user._id;

    if (!shopName || !address || !phone || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the shop already exists
    const existingShop = await shopModel.findOne({ shopOwner });

    if (existingShop) {
      return res.status(400).json({ message: "Shop already exists" });
    }
    const logo = req.file?.path || '';

    const newShop = new shopModel({
      shopOwner,
      shopName,
      logo,
      address,
      phone,
      description,
    });

    await newShop.save();
    return res
      .status(201)
      .json({ message: "Shop created successfully", shop: newShop });
  } catch (error) {
    console.error("Error creating shop:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
