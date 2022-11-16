const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function singup(req, res) {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const user = await UserModel.create(req.body)
        const payload = { email: user.email }
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '5h' })
        res.status(200).json({ email: user.email, userId: user.id, rol: user.rol, token: token })

    } catch (error) {
        console.log(error)
    }
}

async function login(req, res) {
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) return res.status(500).send('email or password incorrect')

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) return res.status(500).send(`error: ${err}`)
            if (!result) return res.status(500).send('email or password incorrect')
        })
        const payload = { email: user.email }
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '5h' })
        res.status(200).json({ email: user.email, userId: user.id, rol: user.rol, token: token })
    } catch (error) {
        console.log(error)
    }
}

async function getUserById(req, res) {
    try {
        const user = await UserModel.findById(req.params.id)
        res.json(user)
    } catch (error) {
        console.log(error)
    }

}

async function getAllUsers(req, res) {
    try {
        const allUsers = await UserModel.find()
        res.json(allUsers)
    } catch (error) {
        console.log(error)
    }
}

async function userProfile(req, res) {
    try {
        const userProfile = await UserModel.findById(res.locals.user.id, { __v: 0 })
            .populate('spot', ['name'])
        res.json(userProfile)
    } catch (error) {
        console.log(error)
    }
}

async function updateUserById(req, res) {
    try {
        const userUpdate = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(userUpdate)
    } catch (error) {
        console.log(error)
    }
}

async function updateUserProfile(req, res) {
    try {
        const updateUserProfile = await UserModel.findByIdAndUpdate(res.locals.user.id, req.body, { new: true })
        res.json(updateUserProfile)
    } catch (error) {
        console.log(error)
    }
}

async function deleteUserById(req, res) {
    try {
        const userDelete = await UserModel.findByIdAndDelete(req.params.id)
        if (!userDelete) { res.json("This user doesn´t exist") }
        else { res.json(userDelete) }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    singup,
    login,
    getUserById,
    getAllUsers,
    userProfile,
    updateUserById,
    updateUserProfile,
    deleteUserById,
}
