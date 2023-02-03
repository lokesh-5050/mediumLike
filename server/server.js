require('dotenv').config({ path: './.env' })
const express = require('express')
const app = express()
const PORT = process.env.PORT

require('cors')({ credentials: true, origin: process.env.DOMAIN })

const indexRoutes = require('./routes/indexRoutes')

require('./models/dataBaseConfig').dataBaseConnect()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/v1/', indexRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
