const express = require('express');
const router = express.Router();
const paymentController = require('../Controllers/paymentController');

router.post('/create-checkout-session', paymentController);

module.exports = router;
