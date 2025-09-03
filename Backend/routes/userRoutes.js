import express from 'express';
import { getUser, login, logout, signUp } from '../controller/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/signup', signUp);
userRouter.post('/login', login);
userRouter.post('/logout', logout);
userRouter.get('/me', authMiddleware,getUser);


export default userRouter;