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
 * @post route => send-mail for forgot password
 */
router.get('/send-mail', sendmail)

/** 
* @post route => forgot-password/:id
*/
router.get('/forgot-password/:id', forgotPassword)


/** 
* @post route => upload  , for cloudinary upload
*/
router.get('/upload', upload)


/** 
* @post route => reset-password  , for reset-password
*/
router.get('/reset-password', resetPassword)

/** 
* @post route => delete/:id  , for delete user
*/
router.get('/delete/user/:id', deletUser)

module.exports = router;