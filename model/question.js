const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const question = new Schema({
  question: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }],
  correctAnswer: {
    type: String,
    required: true
  }
});

let Question = mongoose.model('Question', question);

module.exports = Question;
