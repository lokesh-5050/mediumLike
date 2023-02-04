const userModel = require('../models/userModel')
exports.authenticate = async (req, res, next) => {
    try {
        let {token} = req.cookie
        console.log(token, " cookie")
        const isVerified = await userModel.sendToken(token)
        console.log(isVerified, " isVerified")

        if (!isVerified) return res.status(440).json({ message: "Session Expired" })

        res.status(200).json({ message: "Authenticated" })

    } catch (error) {
        res.status(440).json({ message: error.message })
    }

}