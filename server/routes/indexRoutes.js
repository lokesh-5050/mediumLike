const express = require('express');
const { homePage, signup, signin, signout } = require('../controllers/indexController');
const router = express.Router()
const userModel = require('../models/userModel');
const { authenticate } = require('../Utils/Auth');

router.get('/', authenticate ,homePage)

/**
 * @post route => sign up
 */
router.post('/signup', signup)

/**
 * @post route => sign in
 */
router.post('/signin', signin)

/**
 * @post route => sign out
 */
router.post('/signout', signout)

module.exports = router;