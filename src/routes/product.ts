import { Router } from "express";
import {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
} from "../controllers/product";
import { celebrate, Segments } from "celebrate";
import { createProductBodySchema, defaultUserPathSchema, updateProductBodySchema } from "../validators/product";
import { jwtMiddleware } from "../services";

const router = Router();

router.get("/Products", jwtMiddleware, getAllProducts);

router.post("/Product", 
    jwtMiddleware, 
    celebrate({ [Segments.BODY]: createProductBodySchema }), 
    createProduct
);

router.get("/Product/:id",
    jwtMiddleware,
    celebrate({ [Segments.PARAMS]: defaultUserPathSchema }), 
    getProductById
);

router.put("/Product/:id",
    jwtMiddleware,
    celebrate({ [Segments.PARAMS]: defaultUserPathSchema }),
    celebrate({ [Segments.BODY]: updateProductBodySchema }),
    updateProduct
);

export default router;