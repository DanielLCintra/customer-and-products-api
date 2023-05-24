import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { User } from "../models/user";
import { UserAddress } from "../models/userAddress";

export const signIn: RequestHandler = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

        return res.json({ token });
    } catch (error) {
        console.error('Error during authentication:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const signUp: RequestHandler = async (req, res, next) => {
    try {
        const { name, email, password, address } = req.body;

        const userAlreadyExist = await User.findOne({ where: { email } });

        if (userAlreadyExist) {
            return res.status(409).json({ error: 'A user with this e-mail already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        let userAddress = {};

        if (address) {
            userAddress = await UserAddress.create({ ...address, user_id: newUser.id });
        }

        res.status(201).json({ message: 'User created successfully', user: { id: newUser.id, name: newUser.name, email: newUser.email, address: userAddress } });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
