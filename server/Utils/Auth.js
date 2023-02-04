const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
exports.sendToken = async (user, req, res, statusCode) => {
    try {

        const token = user.signJwt()
        res.cookie('token', token, { maxAge: Date.now() + 3 * 24 * 60 * 60 * 1000, expires: '1h' })


        res.status(200).json({ message: "Logged In" })

    } catch (error) {
        res.status(440).json({ message: error.message })
    }

}