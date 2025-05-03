import { handleFileUpload } from "../config/cloudinaryConfig.js";
import Video from "../models/Videos.js"; // adjust the path as needed

export const uploadVideo = async (req, res, next) => {
  try {
    if (!req.file || !req.body.title) {
      return res
        .status(400)
        .json({ message: "Title and video file are required." });
    }

    // Upload the video to Cloudinary
    const uploaded = await handleFileUpload(
      `data:video/webm;base64,${req.file.buffer.toString("base64")}`,
      `BRIDG/${req.body.title}`
    );

    // Save video metadata to MongoDB
    const newVideo = new Video({
      title: req.body.title,
      url: uploaded.secure_url,
      id: uploaded.public_id,
    });

    await newVideo.save();

    res.status(201).json({
      message: "Video uploaded and saved successfully.",
      video: newVideo,
    });
  } catch (error) {
    next(error);
  }
};
