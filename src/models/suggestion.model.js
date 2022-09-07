const mongoose = require('mongoose')
const Schema = mongoose.Schema   

const suggestionModel = new Schema({
    voterName: {
        type: String,
        required: true,
    },
    suggestion: {
        type: String,
        required: true
    }
})

module.exports = suggestionModel