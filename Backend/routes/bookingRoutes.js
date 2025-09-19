import express from 'express';
import { changeStatus, createBooking, getBooking } from '../controller/bookingController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const bookingRouter = express.Router();

bookingRouter.post('/create-booking/:id',authMiddleware, createBooking);
bookingRouter.get('/getBookings',authMiddleware, getBooking);
bookingRouter.post('/paymentstatus',authMiddleware, changeStatus);

export default bookingRouter;