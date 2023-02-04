const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { sendToken } = require('../Utils/Auth')
exports.homePage = async (req, res, next) => {
    res.send("hello")
}

exports.signup = async (req, res, next) => {
    let data = req.body
    try {
        let user = await userModel.findOne({ email: req.body.email }).exec()
        if (user) {
            return res.status(501).json({ message: "user exists with this credentials" })
        }
        let newUser = new userModel(data)
        let createdUser = await newUser.save()
        res.json(createdUser)
    } catch (error) {
        res.status(501).json({ error: error.message })
    }

}

exports.signin = async (req, res, next) => {
    let { email, password } = req.body
    try {
        let user = await userModel.findOne({ email }).exec()
        if (!user) {
            return res.status(404).json({ message: "User not Found!!" })
        }

        const matched = await user.comparepassword(password)

        console.log(matched, " matched")

        if (!matched) return res.status(401).json({ message: "Wrong Credentials" })

        const token = user.signJwt(user)

        if (!token) return res.status(501).json({ "message": "Token genertion failed" })

        sendToken(user, req, res, 200)

        // res.status(200).json({ token: token, message: "Logged in" })

    } catch (error) {
        res.status(501).json({ error: error.message })
    }

}

exports.signout = async (req, res, next) => {
    try {
        await res.clearCookie('token')
        res.status(404).json({ message: "Logged out" })
    } catch (error) {
        res.status(501).json({ message: error.message })
    }
}


