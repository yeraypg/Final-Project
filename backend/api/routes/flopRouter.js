const router = require('express').Router()

const {
    checkAuth,
    checkRolAdmin,
} = require('../utils')

const {
    showOneFlop,
    showAllFlops,
    createFlop,
    updateFlop,
    deleteFlop,
} = require('../controllers/flopController')

router

    .post('/', checkAuth, createFlop)

    .get('/:flopId', checkAuth, showOneFlop)
    .get('/', checkAuth, showAllFlops)

    .patch('/:flopId', checkAuth, updateFlop)
    .patch('/delete/:flopId', checkAuth, deleteFlop)

module.exports = router
