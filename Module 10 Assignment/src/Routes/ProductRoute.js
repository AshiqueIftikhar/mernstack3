const express = require('express');
const router = express.Router();

const {getProduct} = require('../Controllers/ProductController');
const {authenticate, generateToken} = require('../Middleware/authentication')

router.post("/products",authenticate, getProduct);

module.exports = router;