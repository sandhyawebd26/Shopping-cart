const express = require("express");
const router = express.Router();
const postCheckoutController= require('../Controllers/checkoutController')

router.post("/checkout", postCheckoutController);


module.exports= router;