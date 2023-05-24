import { Router } from "express";

import {
    signIn,
    signUp,
} from "../controllers/auth";

const router = Router();

router.post("/Auth", signIn);
router.post("/Signup", signUp);

export default router;