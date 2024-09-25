const mongoose = require('mongoose');
let Schema = mongoose.Schema
    
const quizScore = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quiz',
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    dateTaken: {
        type: Date,
        default: Date.now
    }
});

let QUIZSCORE = mongoose.model('quizScore', quizScore);
module.exports = QUIZSCORE