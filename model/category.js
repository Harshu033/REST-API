
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    }
});

let CATEGORY = mongoose.model('category', category);
module.exports = CATEGORY