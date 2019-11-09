const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({

    firstName : {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    gender: {type: String, required: true},
    jobRole: {type: String, required: false},
    department: {type: String, required: false},
    address: {type: String, required: false},

});

module.exports = mongoose.model('Admin', adminSchema);