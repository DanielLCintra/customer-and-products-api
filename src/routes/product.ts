import { Router } from "express";
import {
    getAllProducts,
    createProduct,
} from "../controllers/product";
import { celebrate, Segments } from "celebrate";
import { createProductBodySchema } from "../validators/product";
import { jwtMiddleware } from "../services";

const router = Router();

router.get("/Products", jwtMiddleware, getAllProducts);

router.post("/Product", 
    jwtMiddleware, 
    celebrate({ [Segments.BODY]: createProductBodySchema }), 
    createProduct
);

export default router;