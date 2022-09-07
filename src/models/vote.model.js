const mongoose = require('mongoose')
const Schema = mongoose.Schema   

const voteSchema = new Schema({
    hairstyle: {
        type: String,
        required: true
    },
    voterName: {
        type: String,
        required: true,
    }
})

module.exports = voteSchema