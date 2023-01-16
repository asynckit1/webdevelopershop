const express = require('express');

const router = express.router();
const authController = require('../controllers/auth.controller')

// Routes
router.get('/signup', authController.getSignUp)

router.get('/login', authController.getLogin)

module.exports = router;