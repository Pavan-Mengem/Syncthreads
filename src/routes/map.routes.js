import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
const router = Router();


// Importing controllers
import {getMap} from "../controllers/map.controller.js";


// Routes
router.get("/getmap",authMiddleware,getMap);


export default router;  