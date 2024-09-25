const mongoose = require('mongoose');
let Schema = mongoose.Schema

const questions = new Schema({
    questionText: {
        type: String,
        required: true
    },
    option1: {
        type: String,
        required: true
    },
    option2: {
        type: String,
        required: true
    },
    option3: {
        type: String,
        required: true
    },
    option4: {
        type: String,
        required: true
    },
    correctOption: {
        type: String,
        required: true,
    }
});

let QUESTION = mongoose.model("questions", questions)
module.exports = QUESTION

