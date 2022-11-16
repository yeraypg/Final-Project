const router = require('express').Router()

const {
    checkAuth,
    checkRolAdmin,
} = require('../utils')

const {
    showAllExamples,
    showOneExample,
    createExample,
    updateExample,
    deleteExample,
} = require('../controllers/exampleController')

router

    .post('/', checkAuth, createExample)

    .get('/:exampleId', checkAuth, showOneExample)
    .get('/', checkAuth, showAllExamples)

    .patch('/:exampleId', checkAuth, updateExample)
    .patch('/delete/:exampleId', checkAuth, deleteExample)


module.exports = router
