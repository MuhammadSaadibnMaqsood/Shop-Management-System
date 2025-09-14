import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  createProduct,
  getAllProducts,
  getOwnerProducts,
} from "../controller/productController.js";
import upload from "../middleware/uploadLogoMiddleware.js";

const productRouter = express.Router();
productRouter.post(
  "/create",
  (req, res, next) => {
    console.log("🔥 Request aayi hai");
    next();
  },
  authMiddleware,
  (req, res, next) => {
    upload.array("images", 5)(req, res, (err) => {
      if (err) {
        console.error("❌ Multer error:", err);
        return res
          .status(400)
          .json({ message: "Multer upload failed", error: err.message });
      }
      console.log("🔥 Multer ke baad:", req.files);
      next();
    });
  },
  createProduct
);

productRouter.get("/allproducts", getAllProducts);
productRouter.get("/ownerproducts", authMiddleware, getOwnerProducts);

export default productRouter;
