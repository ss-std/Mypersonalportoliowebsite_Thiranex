// ==========================================
// 📬 CONTACT & INQUIRIES ROUTE
// Description: Receives messages submitted by portfolio
// visitors and saves them to the MongoDB database.
// ==========================================

const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Message = require('../models/Message');
const { dbEnabled } = require('../config/db');

// ------------------------------------------
// POST /api/contact - Submit new message
// ------------------------------------------
router.post(
  '/',
  [
    // Human input validations with descriptive error messages
    body('name').trim().notEmpty().withMessage('Please provide your name'),
    body('email').isEmail().normalizeEmail().withMessage('Please enter a valid email address'),
    body('subject').optional().trim(),
    body('message').trim().isLength({ min: 5 }).withMessage('Message must be at least 5 characters long')
  ],
  async (req, res, next) => {
    try {
      // 1. Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ 
          success: false, 
          errors: errors.array().map(err => err.msg) 
        });
      }

      // 2. Extract verified fields
      const { name, email, subject, message } = req.body;

      // 3. Create and save new message document
      const savedMessage = dbEnabled
        ? await new Message({
            name,
            email,
            subject: subject || 'Portfolio Inquiry',
            message
          }).save()
        : { name, email, subject: subject || 'Portfolio Inquiry', message };

      console.log(`📩 New message received from: ${name} (${email})`);

      // 4. Respond with success
      res.status(201).json({
        success: true,
        message: 'Your message has been sent successfully!',
        data: savedMessage
      });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
