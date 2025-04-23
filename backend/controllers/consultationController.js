export const submitConsultation = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, reason } = req.body;

    if (!firstName || !lastName || !email || !phone || !reason) {
      return res.status(400).json({ message: "All fields are required." });
    }

    res.status(200).json({
      message: "Consultation request submitted successfully.",
      data: {
        firstName,
        lastName,
        email,
        phone,
        reason,
      },
    });
  } catch (error) {
    next(error);
  }
};
