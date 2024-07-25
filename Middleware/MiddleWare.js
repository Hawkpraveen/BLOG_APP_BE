import jwt from 'jsonwebtoken';
import { errorHandler } from '../Utils/Error.js';
import dotenv from 'dotenv';
dotenv.config()

export const middleware = (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return next(errorHandler(401, 'Unauthorized access token'));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return next(errorHandler(401, 'Invalid Token'));
    }
}