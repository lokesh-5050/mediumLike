const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { sendToken } = require('../Utils/Auth')

const nodemailer = require('nodemailer')
const mailer = require('../Utils/nodemailer')

const cloudinary = require('cloudinary').v2
const formidable = require('formidable')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

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

        let pageUrl = req.protocol + "://" + req.hostname + ":" + process.env.PORT + "/api/v1" + `/forgot-password/${user._id}`
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


exports.forgotPassword = async (req, res, next) => {
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

exports.upload = async (req, res, next) => {
    try {
        const form = new formidable()

        form.parse(req, async (err, fields, files) => {
            if (files) {
                const { public_id, secure_url } = await cloudinary.uploader.upload(files.upload.filepath, {
                    folder: 'medium',
                    crop: 'scale',
                    width: 1920
                })
                console.log(public_id, secure_url);
                let user = userModel.findById(req.id).exec()
                user.avatar = {
                    public_id,
                    url: secure_url
                }
                // await user.save()
                //or 
                // userModel.findByIdAndUpdate(id , {$set:user} , {new:true})

                res.status(200).json({ message: "File uploaded" })
            } else {
                res.status(500).json({ message: "File not Uploaded" })
            }

        })
    } catch (error) {
        res.status(500).json({ message: error })
    }

}

exports.resetPassword = async (req, res, next) => {
    try {
        let { currentPassword, newPassword } = req.body;
        let user = await userModel.findById(req.id).select("+password").exec();

        let match = await user.comparepassword(currentPassword);

        if (!match) res.status(501).json({ message: "Current Password does not matched" });

        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: "New Password Setted", user });

    } catch (error) {
        res.status(501).json(error);
    }
}