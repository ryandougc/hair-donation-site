const mongoose = require('mongoose')
const Schema = mongoose.Schema   

const hairstyleModel = new Schema({
    Id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = hairstyleModel