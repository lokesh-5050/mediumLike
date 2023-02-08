const express = require('express');
const { homePage, signup, signin, signout, sendmail, resetPassword, upload, forgotPassword } = require('../controllers/indexController');
const router = express.Router()
const userModel = require('../models/userModel');
const { authenticate } = require('../Utils/Auth');
router.get('/', authenticate, homePage)

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

/**
 * @post route => send-mail
 */
router.get('/send-mail', sendmail)

/** 
* @post route => forgot-password/:id
*/
router.get('/forgot-password/:id', forgotPassword)


/** 
* @post route => upload
*/
router.get('/upload', upload)

module.exports = router;