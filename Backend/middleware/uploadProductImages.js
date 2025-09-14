import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: "product_images",
      allowed_formats: ["jpg", "png", "jpeg", "avif"],
    };
  },
});
const upload = multer({ storage });

export default upload;
