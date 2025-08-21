import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes.js';
import clodinary from './config/cloudinary.js';
import shopRouter from './routes/shopRouter.js';

dotenv.config();
const PORT = process.env.PORT ||3000;

// connectivity to MongoDB
connectDB();
// connectivity to Cloudinary
clodinary();

// app setup
const app = express();
// middlewares
app.use(express.json());
app.use(cookieParser());

// routes

app.use('/api/user',userRouter);
app.use('/api/shop',shopRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
}); 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});