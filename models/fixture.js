const mongoose = require('mongoose');

const fixtureSchema = mongoose.Schema({
    teamOne : {type: String, required: true},
    teamTwo : {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    location: {type: String, required: true},
    week: {type: String, required: true},
    point: {type: String, required: false},
    goals: {type: String, required: false},
    gameState: {type: String, required: false},
})

module.exports = mongoose.model('Fixture', fixtureSchema)