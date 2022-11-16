const router = require('express').Router()

const {
    checkAuth,
    checkRolAdmin
} = require('../utils')

const {
    singup,
    login,
    getUserById,
    getAllUsers,
    userProfile,
    updateUserById,
    updateUserProfile,    
    deleteUserById,    

} = require('../controllers/userController')

router
    .post('/signup', singup)
    .post('/login', login)

    .get('/profile', checkAuth, userProfile)
    .get('/', checkAuth, checkRolAdmin, getAllUsers)
    .get('/:id', checkAuth, checkRolAdmin, getUserById)

    .put('/profile', checkAuth, updateUserProfile)
    .put('/:id', checkAuth, checkRolAdmin, updateUserById)

    .delete('/:id', checkAuth, checkRolAdmin, deleteUserById)

module.exports = router
