const mongoose = require('mongoose');
let Schema = mongoose.Schema

const quizType = new Schema({
    typeName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        // optional: true
    }
});

let QUIZTYPE = mongoose.model('quizType', quizType);
module.exports = QUIZTYPE