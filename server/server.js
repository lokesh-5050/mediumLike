require('dotenv').config({ path: './.env' })
const express = require('express')
const app = express()
const PORT = process.env.PORT
const session = require('express-session')
var cookieParser = require('cookie-parser')
require('cors')({ credentials: true, origin: process.env.DOMAIN })


require('./models/dataBaseConfig').dataBaseConnect()

const indexRoutes = require('./routes/indexRoutes')


app.use(session({ resave: true, saveUninitialized: false, secret: 'secet12376786' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/v1/', indexRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
