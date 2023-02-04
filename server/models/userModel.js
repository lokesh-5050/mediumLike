const mongoose = require('mongoose')
const validator = require('validator')
const { default: isEmail } = require('validator/lib/isemail')
const bcrypt = require('bcrypt')
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





const user = mongoose.model('user', userSchema)

module.exports = user