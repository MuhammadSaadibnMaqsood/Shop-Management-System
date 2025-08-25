import express from 'express';
import { createBooking } from '../controller/bookingController';
import { authMiddleware } from '../middleware/authMiddleware';

const bookingRouter = express.Router();

bookingRouter.post('/create-booking:id',authMiddleware, createBooking);

export default bookingRouter;