import Consultation from "../models/Consultation.js";

export const submitConsultation = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, reason } = req.body;

    if (!firstName || !lastName || !email || !phone || !reason) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    const consultation = new Consultation({
      firstName,
      lastName,
      email,
      phone,
      reason,
    });

    await consultation.save();

    res.status(200).json({
      message: "Consultation request submitted successfully.",
      consultation,
    });
  } catch (error) {
    next(error);
  }
};
