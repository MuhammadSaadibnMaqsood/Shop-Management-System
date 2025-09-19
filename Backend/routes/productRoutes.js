import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  createProduct,
  getAllProducts,
  getOwnerProducts,
  getSoldProducts,
} from "../controller/productController.js";
import upload from "../middleware/uploadLogoMiddleware.js";

const productRouter = express.Router();
productRouter.post(
  "/create",
  authMiddleware,
  (req, res, next) => {
    upload.array("images", 5)(req, res, (err) => {
      if (err) {
        console.error("❌ Multer error:", err);
        return res
          .status(400)
          .json({ message: "Multer upload failed", error: err.message });
      }
      next();
    });
  },
  createProduct
);

productRouter.get("/allproducts", getAllProducts);
productRouter.get("/ownerproducts", authMiddleware, getOwnerProducts);
productRouter.get("/getsoldproducts", authMiddleware, getSoldProducts);

export default productRouter;
