import express from 'express';
import { createShop } from '../controller/shopController.js';
import upload from '../middleware/uploadLogoMiddleware.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const shopRouter = express.Router();
shopRouter.use(authMiddleware);
shopRouter.post('/create',upload.single("logo"), createShop);

export default shopRouter;