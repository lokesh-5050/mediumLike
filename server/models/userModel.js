const mongoose = require('mongoose')
const validator = require('validator')
const { default: isEmail } = require('validator/lib/isemail')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 4,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email Field not filled'],
        validate: [validator.isEmail, "email invalid"]
    },
    password: {
        type: String,
        minLength: 5,
        required: [true, "password field cannot be empty"],
        match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
    },
    avatar: {
        type: String,
        default: 'avatar.png'
    }
})

userSchema.pre('save' , async function(){
    console.log("inside pre");
    this.password =  await bcrypt.hash(this.password , 10)
})


userSchema.methods.comparepassword = function(password){
    console.log("insdie comparepassword")
    return bcrypt.compareSync(password , this.password)
}

userSchema.methods.sendToken = function(token){
    console.log("inside sendToken")
    return jwt.verify(token , 'jwt7665757as' , {complete:true})
}





const user = mongoose.model('user', userSchema)

module.exports = user