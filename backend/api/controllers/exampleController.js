const SpotModel = require('../models/spotModel')

async function createExample(req, res) {
    try {
        const specificSpot = await SpotModel.findById(req.body.spotId)
        const specificFlop = specificSpot.flops.id(req.body.flopId)
        specificFlop.examples.push(req.body)
        await specificSpot.save()
        res.json(specificFlop.examples)
    } catch (error) {
        console.log(error)
    }
}

async function showOneExample(req, res) {
    try {
        const specificSpot = await SpotModel.findById(req.body.spotId)
        const specificFlop = specificSpot.flops.id(req.body.flopId)
        const specificExample = specificFlop.examples.id(req.params.exampleId)
        res.json(specificExample)
    } catch (error) {
        console.log(error)
    }
}

async function showAllExamples(req, res) {
    try {
        const specificSpot = await SpotModel.findById(req.headers.spotid)
        const specificFlop = specificSpot.flops.id(req.headers.flopid)
        res.json(specificFlop.examples)
    } catch (error) {
        console.log(error)
    }
}

async function deleteExample(req, res) {
    try {
        const specificSpot = await SpotModel.findById(req.body.spotId)
        const specificFlop = specificSpot.flops.id(req.body.flopId)
        const specificExample = specificFlop.examples.id(req.params.exampleId).remove()
        await specificSpot.save()
        res.json(specificExample)
    } catch (error) {
        console.log(error)

    }
}

async function updateExample(req, res) {
    try {
        const specificSpot = await SpotModel.findById(req.body.spotId)
        const specificFlop = specificSpot.flops.id(req.body.flopId)
        const specificExample = specificFlop.examples.id(req.params.exampleId)
        specificExample.set(req.body)
        await specificSpot.save()
        res.json(specificExample)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createExample,
    showOneExample,
    showAllExamples,
    deleteExample,
    updateExample
}
