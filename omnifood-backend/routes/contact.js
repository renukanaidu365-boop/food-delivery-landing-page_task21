const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ message: 'All fields required' });

    await Contact.create({ name, email, message });
    res.json({ status: 'success', message: 'Message received!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;