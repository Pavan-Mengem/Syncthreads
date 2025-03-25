import { Router } from "express";
const router = Router();

// Importing controllers
import { register,login,} from "../controllers/auth.controller.js";

// Routes
router.post("/register", register);
router.post("/login", login);

export default router;