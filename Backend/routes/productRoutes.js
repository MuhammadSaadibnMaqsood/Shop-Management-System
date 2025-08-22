import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import uploadProduct from '../middleware/uploadProductImages.js';
import { createProduct } from '../controller/productController.js';

const productRouter = express.Router();

productRouter.post('/create',uploadProduct.array('images',4), authMiddleware,createProduct);


export default productRouter