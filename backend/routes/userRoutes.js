import { Router } from "express";
import { registeration } from "../controllers/userController.js";

const router = Router();

router.post("/signup", registeration);

export default router;
