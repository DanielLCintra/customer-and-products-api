import { RequestHandler, Request, Response, NextFunction } from 'express';
import { Product } from '../models/product';
import dotenv from 'dotenv';

dotenv.config();

interface RequestWithUser extends Request {
    user?: {
        id: string;
    };
}

export const getAllProducts: RequestHandler = async (req: RequestWithUser, res, next) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            return res.status(404).json({ error: 'User not found' });
        }

        const allProducts: Product[] = await Product.findAll({
            where: {
                user_id: userId,
            },
        });

        return res
            .status(200)
            .json({ message: "Products fetched successfully", data: allProducts });
    } catch (error) {
        console.error('Error during authentication:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const createProduct: RequestHandler = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            return res.status(404).json({ error: 'User not found' });
        }

        const newProduct = await Product.create({
            ...req.body,
            user_id: userId,
        });

        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getProductById: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product: Product | null = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        return res
            .status(200)
            .json({ message: "Product fetched successfully", data: product });
    } catch (error) {
        console.error('Error during authentication:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateProduct: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;

        const product: Product | null = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await Product.update({ ...req.body }, { where: { id } });


        const updatedProduct: Product | null = await Product.findByPk(id);

        return res
            .status(200)
            .json({ message: "Product updated successfully", data: updatedProduct });
    } catch (error) {
        console.error('Error during authentication:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};