const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
exports.dataBaseConnect = async()=>{
    try {
        // await mongoose.connect('mongodb://localhost:27017/mediumLike')
        await mongoose.connect('mongodb+srv://lokesh:LzWXSQzeUAZbQ1TV@cluster0.zi6wonz.mongodb.net/medium?retryWrites=true&w=majority')
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
}
