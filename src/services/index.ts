import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

interface AuthenticatedRequest extends Request {
    user?: JwtPayload;
}

export const jwtMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY as string) as JwtPayload;

        req.user = decoded;

        next();
    } catch (error) {
        console.error('Error during JWT verification:', error);
        return res.status(403).json({ error: 'Failed to authenticate token' });
    }
};