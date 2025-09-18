import express from 'express';
import { createBooking, getBooking } from '../controller/bookingController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const bookingRouter = express.Router();

bookingRouter.post('/create-booking/:id',authMiddleware, createBooking);
bookingRouter.get('/getBookings',authMiddleware, getBooking);

export default bookingRouter;