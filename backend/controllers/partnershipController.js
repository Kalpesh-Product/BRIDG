
const newPartnershipLead = async (req, res, next) => {
    try {
        const { firstName, lastName, email, country, mobile, yourProfile, message } = req.body;

        if (!firstName || !lastName || !email || !country || !mobile || !yourProfile) {
            return res.status(400).json({ error: 'All required fields must be provided.' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format.' });
        }

        const mobileRegex = /^\+?[0-9]{7,15}$/;
        if (!mobileRegex.test(mobile)) {
            return res.status(400).json({ error: 'Invalid mobile number.' });
        }

        res.status(200).json({ message: 'Validation passed (demo mode).' });

    } catch (error) {
        next(error);
    }
};
