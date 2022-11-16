const SpotModel = require('../models/spotModel')

async function createFlop(req, res) {
    try {
        const spot = await SpotModel.findById(req.body.spot)
        spot.flops.push(req.body)
        await spot.save()
        res.json(spot)
    } catch (error) {
        console.log(error)
    }
}

async function showOneFlop(req, res) {
    try {
        console.log(req.headers)
        const spot = await SpotModel.findById(req.headers.spotid, { __v: 0 })
        const flop = spot.flops.id(req.params.flopId)
        res.json(flop)
    } catch (error) {
        console.log(error)
    }
}

async function showAllFlops(req, res) {
    try {
        const spot = await SpotModel.findById(req.headers.spotid, { __v: 0 })
        res.json(spot.flops)
    } catch (error) {
        console.log(error)
    }
}

async function deleteFlop(req, res) {
    try {
        const delSpot = await SpotModel.findById(req.body.spot, { __v: 0 })
        const delFlop = delSpot.flops.id(req.params.flopId).remove()
        await delSpot.save()
        res.json(delSpot)
    } catch (error) {
        console.log(error)
    }
}

async function updateFlop(req, res) {
    try {
        const spot = await SpotModel.findById(req.body.spot, { __v: 0 })
        const updateFlop = spot.flops.id(req.params.flopId)
        updateFlop.set(req.body)
        await spot.save()
        res.json(spot)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createFlop,
    showOneFlop,
    showAllFlops,
    deleteFlop,
    updateFlop,
}
