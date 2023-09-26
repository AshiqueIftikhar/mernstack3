const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.post('/user', userController.create);
router.get('/user', userController.read);
router.delete('/user/:id', userController.delete);
router.put('/user/:id', userController.update);

// Repeat this for all controllers

module.exports = router;
