const express = require('express');
const { homePage, signup } = require('../controllers/indexController');
const router = express.Router()
const userModel = require('../models/userModel')

router.get('/', homePage)

/**
 * @post route => sign up
 */
router.post('/signup', signup)

module.exports = router;