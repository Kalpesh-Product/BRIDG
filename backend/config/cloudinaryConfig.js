import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const handleFileUpload = async (file, path) => {
  try {
    const res = await cloudinary.uploader.upload(file, {
      folder: path,
    });
    return res;
  } catch (error) {
    error;
    throw new Error(error.message);
  }
};
