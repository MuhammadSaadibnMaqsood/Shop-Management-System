import express from "express";
import shopModel from "../models/shop.js";
import userModel from "../models/user.js";

export async function createShop(req, res) {
  try {
    const { shopName, address, phone, description } = req.body;
    const shopOwner = req.user._id;

    if (!shopName || !address || !phone || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await userModel.findById(shopOwner);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Check if the shop already exists
    const existingShop = await shopModel.findOne({ shopOwner });

    if (existingShop) {
      return res.status(400).json({ message: "Shop already exists" });
    }

    const avatar = "https://avatar.iran.liara.run/public/2.png";
    const logo = req.file?.path || avatar;

    const newShop = new shopModel({
      shopOwner,
      shopName,
      logo,
      address,
      phone,
      description,
    });

    await newShop.save();

    user.role = "shopowner";
    await user.save();

    return res
      .status(201)
      .json({ message: "Shop created successfully", shop: newShop });
  } catch (error) {
    console.error("Error creating shop:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getShop(req, res) {
  try {
    const shopOwner = req.user._id;
    const shop = await shopModel
      .findOne({ shopOwner })
      .populate("shopOwner", "userName email");
    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }
    return res.status(200).json({ shop });
  } catch (error) {
    console.log("Error fetching shop:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
