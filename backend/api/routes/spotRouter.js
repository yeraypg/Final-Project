const router = require('express').Router()

const {
    checkAuth,
    checkRolCoach,
    checkRolAdmin,
} = require('../utils')

const {
    createSpot,
    showOneSpot,
    showAllSpots,
    deleteSpot,
    updateSpot,
    shareSpot,
    unShareSpot

} = require('../controllers/spotController')

router
    .post('/', checkAuth, createSpot)

    .get('/:spotId', checkAuth, showOneSpot)
    .get('/', checkAuth, showAllSpots)

    .put('/:spotId', checkAuth, updateSpot)
    .put('/shareSpot/:spotId', checkAuth, checkRolCoach, shareSpot)
    .put('/unShareSpot/:spotId', checkAuth, checkRolCoach, unShareSpot)

    .delete('/:spotId', checkAuth, deleteSpot)

module.exports = router
