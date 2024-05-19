import dotenv from 'dotenv';
dotenv.config();
export const jwtSecret = process.env.JWT_SECRET || 'base';
export const jwtExpiry = process.env.JWT_EXPIRY || '1h';