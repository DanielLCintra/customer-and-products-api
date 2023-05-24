import { Router } from "express";

import {
    signIn,
    signUp,
} from "../controllers/auth";
import { celebrate, Segments } from "celebrate";
import { authSchema, signUpSchema } from "../validators/auth";

const router = Router();

router.post("/Auth", celebrate({ [Segments.BODY]: authSchema }), signIn);
router.post("/Signup", celebrate({ [Segments.BODY]: signUpSchema }), signUp);

export default router;