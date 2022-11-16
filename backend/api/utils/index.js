const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

async function checkAuth(req, res, next) {
    if (!req.headers.token) { res.status(403).send('No token found') }
    else {
        try {
            const decodedToken = jwt.verify(req.headers.token, process.env.SECRET)
            res.locals.user = await UserModel.findOne({ email: decodedToken.email })
            next()
        } catch (error) {
            console.log(error)
            res.status(403).send(`Token not valid: ${error}`)
        }
    }
}

function checkRolAdmin(req, res, next) {
    if (res.locals.user.rol !== 'Admin') {
        return res.status(403).send('User not authorized')
    }
    return next();
}

function checkRolCoach(req, res, next) {
    if (res.locals.user.rol !== 'Coach' && res.locals.user.rol !== 'Admin') {
        return res.send('User not authorized')
    }
    return next();
}

async function upAudio(req, res) {
    try {
        const uploadaudio = await cloudinary.uploader.upload(req.body.audio, { resource_type: "raw" })
        res.json(uploadResult.url)
    } catch (error) {
        console.log(error)
    }
}

async function upImage(req, res) {
    try {
        const uploadResult = await cloudinary.uploader.upload(req.body.image)
        res.json(uploadResult.url)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    checkAuth,
    checkRolCoach,
    checkRolAdmin,
    upAudio,
    upImage
}
