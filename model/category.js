const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    color: {
        type: String
    }
})

let CATEGORY = mongoose.model('Category', category);
module.exports = CATEGORY