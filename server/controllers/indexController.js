const userModel = require('../models/userModel')

exports.homePage = async (req, res, next) => {
    res.send("hello")
}

exports.signup = async (req, res, next) => {
    let data = req.body
    try {
        let user = await userModel.findOne({email:req.body.email}).exec()
        if(user){
            return res.status(501).json({message: "user exists with this credentials"})
        }

        let newUser = new userModel(data)

        let createdUser = await newUser.save()
        res.json(createdUser)
    } catch (error) {
        res.status(501).json({error:error   })
    }

}
