require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
// const models = require('./models/models')
// const cors = require('cors')
// const fileUpload = require('express-fileupload')
// const router = require('./routes/index')
// const errorHandler = require('./middleware/ErrorHandlingMiddleware')
// const path = require('path')


const PORT = process.env.PORT || 5000


const app = express()
const start = async () => {
    try {
         await sequelize.authenticate()
         await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

