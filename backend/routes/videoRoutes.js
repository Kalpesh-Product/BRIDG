import { Router } from "express";
import upload from "../config/multerConfig.js";
import { uploadVideo } from "../controllers/videoControllers.js";

const router = Router();

router.post("/upload-video", upload.single("video"), uploadVideo);
export default router;
