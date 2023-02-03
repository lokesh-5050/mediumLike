const mongoose = require('mongoose')
const validator = require('validator')
const { default: isEmail } = require('validator/lib/isemail')
const { use } = require('../routes/indexRoutes')

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

const user = mongoose.model('user', userSchema)

module.exports = user