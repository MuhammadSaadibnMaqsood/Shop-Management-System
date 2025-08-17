import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
const PORT = process.env.PORT ||3000;

// connectivity to MongoDB
connectDB();

// app setup
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
}); 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});