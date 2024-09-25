const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const item = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


let ITEM = mongoose.model('items', item);
module.exports = ITEM