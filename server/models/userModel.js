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
    username: {
        unique: true,
        type: String,
        minLength: 2,
        // required: [true, 'username is required']
    },
    email: {
        type: String,
        required: [true, 'Email Field not filled'],
        validate: [validator.isEmail, "email invalid"]
    },
    password: {
        type: String,
        minLength: 5,
        select: false,
        required: [true, "password field cannot be empty"],
        match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
    },
    avatar: {
        type: Object,
        default: {
            public_id: "",
            url: ""
        }
    },
    lists: [],
    stories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog'
    }],
    passwordResetToken: {
        type: Number,
        default: 0
    }
})

userSchema.pre('save', async function () {
    console.log("inside pre ", this.password);
    this.password = await bcrypt.hash(this.password, 10)
    console.log("after hash ", this.password);
})

userSchema.methods.comparepassword = function (password) {
    console.log("insdie comparepassword")
    return bcrypt.compareSync(password, this.password)
}

userSchema.methods.signJwt = function (user) {
    console.log("user 52", user);
    return jwt.sign({ user }, '566gsadygywg3q4', { expiresIn: '3d' })
}

const user = mongoose.model('user', userSchema)

module.exports = user