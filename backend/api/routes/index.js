const router = require('express').Router()
const user = require('./userRouter')
const spot = require('./spotRouter')
const flop = require('./flopRouter')
const example = require('./exampleRouter')

router.use('/user', user)
router.use('/spot', spot)
router.use('/flop', flop)
router.use('/example', example)
module.exports = router
