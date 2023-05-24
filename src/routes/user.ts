import { Router } from "express";

import {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
} from "../controllers/user";
import { Segments, celebrate } from "celebrate";
import { updateUserBodySchema, defaultUserPathSchema } from "../validators/user";
import { jwtMiddleware } from "../services";

const router = Router();

router.get("/Users", jwtMiddleware, getAllUsers);

router.get("/Users/:id",
    jwtMiddleware,  
    celebrate({ [Segments.PARAMS]: defaultUserPathSchema }), 
    getUserById
);

router.put("/Users/:id",
    jwtMiddleware, 
    celebrate({ [Segments.PARAMS]: defaultUserPathSchema }),
    celebrate({ [Segments.BODY]: updateUserBodySchema }), 
    updateUser
);

router.delete("/Users/:id", 
    jwtMiddleware, 
    celebrate({ [Segments.PARAMS]: defaultUserPathSchema }), 
    deleteUser
);

export default router;