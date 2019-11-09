const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    teamName : {type: String, required: true},
    teamMembers: {type: Object, required: true},
    teamNumber: {type: String, required: true},
    country: {type: String, required: true},
    teamCaptain: {type: String, required: true}
})

module.exports = mongoose.model("Team", teamSchema)