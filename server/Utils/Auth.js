const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
exports.sendToken = async (user, req, res, statusCode) => {
    try {

        const token = user.signJwt()

        console.log(token , " auth ");
        res.cookie('token', token, { expires: new Date(Date.now() + 3*24*60*60*1000) })
        req.id = user._id
        // console.log(req.id);
        res.status(200).json({ message: "Logged In", "token": token })

    } catch (error) {
        res.status(440).json({ message: error.message })
    }

}

exports.authenticate = async (req, res, next) => {
    try {
        let token = req.cookies['token']
        const isValid = jwt.verify(token, '566gsadygywg3q4')
        next()
        // res.status(200).json({ "message": "Authenticated" })

    } catch (error) {
        if (error.name == "JsonWebTokenError") {
            return res.status(500).json({ "message": "token not found, login again!!" })
        } else if (error.name == "TokenExpiredError") {
            return res.status(500).json({ "message": "token not found, login again!!" })
        } else {
            res.status(501).json({ "message": error.name })
        }
    }
}