import axios from "axios";
import User from "../models/User.js";

export const registeration = async (req, res, next) => {
  try {
    const { firstName, lastName, email, mobile } = req.body;

    if (!firstName || !lastName || !email || !mobile) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = new User({
      firstName,
      lastName,
      email,
      mobile,
    });

    const savedUser = await user.save();
    const objectSavedUser = savedUser.toObject();

    axios
      .post(
        process.env.GOOGLE_SHEET_LINK,
        {
          ...objectSavedUser,
          mobile: `'${objectSavedUser.mobile}`,
          type: "registration",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => response.data)
      .then((data) => {
        if (data?.status === "success") {
          return res
            .status(200)
            .json({ message: "User registered successfully." });
        }
      })
      .catch((error) => {
        console.error("Google Sheets error:", error);
        return res.status(500).json({
          error:
            "User is registered, but failed to sync data with Google Sheets.",
        });
      });
  } catch (error) {
    next(error);
  }
};
