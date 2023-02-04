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

exports.authenticate = async (req, res, next) => {
    try {
        let token = req.cookies['token']
        const isValid = jwt.verify(token, '566gsadygywg3q4', { complete: true })

        if (!isValid) return res.status(440).json({ "message": "Session expired" })

        // res.status(200).json({ "message": "Authenticated" })
        next()

    } catch (error) {
        res.status(501).json({ "message": error.message })
    }
}