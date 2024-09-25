const mongoose = require('mongoose');
let Schema = mongoose.Schema

const quiz = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        optional: true
    },  
    questions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questions'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
        // optional: true
    },
    quizTypes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quizType'
    }
});

let QUIZ = mongoose.model("quiz", quiz)
module.exports = QUIZ
