const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Question = require('./question'); // Import the Question schema

const exam = new Schema({
    title: {
        type: String,
        required: true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],// Reference the Question schema
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

let Exam = mongoose.model('Exam', exam);
module.exports = Exam;
