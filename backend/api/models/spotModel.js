const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema({
    spotId: mongoose.Types.ObjectId,
    flopId: mongoose.Types.ObjectId,
    text: {
        type: String
    },
    imageBoard: {
        type: String
    },
    imageHand: {
        type: String
    },
    audio: {
        type: String
    }
},
    {
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    })

const flopSchema = new mongoose.Schema({

    spotId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'spot'
    },
    titleFlop: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    theory: {
        type: String
    },
    exploit: {
        type: String
    },
    audio: {
        type: String
    },
    examples: [exampleSchema],
},
    {
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    });

const spotSchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    titleSpot: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true,
        enum: ['SRP', '3BET', '4BET']
    },
    theory: {
        type: String
    },
    exploit: {
        type: String,
    },
    audio: {
        type: String,
    },
    flops: [flopSchema],
    sharedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
},
    {
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    }
)

const SpotModel = mongoose.model('spot', spotSchema)

module.exports = SpotModel

