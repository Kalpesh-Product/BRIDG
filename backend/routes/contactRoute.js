import { Router } from "express";
import { contactInfo } from "../controllers/contactController.js";

const router = Router();

router.post("/", contactInfo);

export default router;
