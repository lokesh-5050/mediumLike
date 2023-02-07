const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { sendToken } = require('../Utils/Auth')

const nodemailer = require('nodemailer')
const mailer = require('../nodemailer')

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
        let user = await userModel.findOne({ email }).select("+password").exec()
        if (!user) {
            return res.status(404).json({ message: "User not found!!!" })
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

exports.sendmail = async (req, res, next) => {
    try {
        let { email } = req.body;

        let user = await userModel.findOne({ email }).exec()

        if (!user) res.status(404).json({ message: "User not found" })

        let id = user._id

        let pageUrl = req.protocol + "://" + req.hostname + ":" + process.env.PORT + "/api/v1" + `/reset-password/${user._id}`
        console.log(pageUrl);

        if (user.passwordResetToken === 0) {
            await mailer(email, pageUrl)
            console.log("SENT");
            let updatedUser = await userModel.findByIdAndUpdate(id, { passwordResetToken: 1 })
            res.status(200).json({ message: "mail sent check inbox/spam", updatedUser })
        } else {
            res.status(501).json({ messgae: "not sent" })
        }


    } catch (error) {
        res.status(501).json({ message: error.message })
    }
}


exports.resetPassword = async (req, res, next) => {
    try {
        let { id } = req.params
        let { password } = req.body
        console.log(id, " id");

        let user = await userModel.findById(id).select("+password").exec()
        console.log(user, " line 102");
        if (user.passwordResetToken === 1) {
            user.password = password;
            user.passwordResetToken = 0;
            user.save()
        } else {
            res.status(500).json({ message: "Reset link expired" })
        }

    } catch (error) {
        res.status(501).json({ message: error.message })
    }
}