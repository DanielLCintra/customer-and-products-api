import { Router } from "express";

import {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
} from "../controllers/user";
import { Segments, celebrate } from "celebrate";
import { updateUserBodySchema, defaultUserPathSchema } from "../validators/user";

const router = Router();

router.get("/Users", getAllUsers);

router.get("/Users/:id", 
    celebrate({ [Segments.PARAMS]: defaultUserPathSchema }), 
    getUserById
);

router.put("/Users/:id", 
    celebrate({ [Segments.PARAMS]: defaultUserPathSchema }),
    celebrate({ [Segments.BODY]: updateUserBodySchema }), 
    updateUser
);

router.delete("/Users/:id", 
    celebrate({ [Segments.PARAMS]: defaultUserPathSchema }), 
    deleteUser
);

export default router;