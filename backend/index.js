const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const cloudinary = require('cloudinary').v2
require('dotenv').config()

const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });

(async function(){
    await mongoose.connect(process.env.URL, {
        dbName: process.env.MONGO_DB
    })
    console.log('Connected to DB')

    app
    .use(cors('*'))
    .use(morgan('dev'))
    .use(express.json())
    .use('/api',require('./api/routes'))
    .listen(process.env.PORT, () => {
        console.log(`connected to port: ${process.env.PORT}`)
    })
})()

