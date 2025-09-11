// middleware/multer.js
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "product_images",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const uploadProduct = multer({ storage });

export default uploadProduct;
