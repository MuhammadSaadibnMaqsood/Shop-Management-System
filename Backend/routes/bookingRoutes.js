import express from 'express';
import { createBooking } from '../controller/bookingController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const bookingRouter = express.Router();

bookingRouter.post('/create-booking/:id',authMiddleware, createBooking);

export default bookingRouter;