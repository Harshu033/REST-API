const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const PatientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact: {
    phone: String,
    email: String,  
  },
  medicalHistory: [{
    condition: String,
    diagnosisDate: Date,
    treatment: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PATIENT = mongoose.model('Patient', PatientSchema)
module.exports = PATIENT