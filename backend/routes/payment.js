// backend/routes/payment.js
const express = require('express');
const router = express.Router();
const { createPayment, executePayment } = require('../controllers/paymentController');

// Create a mock payment
router.post('/create', createPayment);

// Execute a mock payment
router.post('/execute', executePayment);

module.exports = router;
