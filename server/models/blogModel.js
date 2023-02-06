const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    data: {
        type: String,
        required: [true, "Input Field cannot be empty"]
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        reg: 'user'
    }
}, { timestamps: true })


const blog = mongoose.model('blog', blogSchema)

module.exports = blog