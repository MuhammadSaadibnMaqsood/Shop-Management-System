import express from 'express';
import userModel from '../models/user.js';
import jwt from 'jsonwebtoken';
export async function authMiddleware (req, res, next) {
    const token = req.cookies.jwt;

    try {
        if (!token) {
            return res.status(401).json({ message: "Unauthorized No token found" }); 
            
        }

        const decode = jwt.verify(token,process.env.JWT_SECRET);

        if (!decode) {
            return res.status(401).json({ message: "Unauthorized Invalid token" });
        }

        const user = await userModel.findById(decode.userId).select("-password");

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in authMiddleware:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}