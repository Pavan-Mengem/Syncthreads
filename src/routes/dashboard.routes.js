import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
const router = Router();


// Importing controllers
import {getUserDashboard} from "../controllers/dashboard.controller.js";


// Routes
router.get("/getDashboard",authMiddleware, getUserDashboard);


export default router;