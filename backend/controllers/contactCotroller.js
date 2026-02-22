const { createContact } = require('../models/contactModel');

const submitContact = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newContact = await createContact(name, email, message);
        res.status(200).json({ success: true, message: 'Message received!', data: newContact });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { submitContact };