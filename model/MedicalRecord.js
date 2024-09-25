const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const MedicalRecordSchema = new Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const MEDIRECORD = mongoose.model('MedicalRecord', MedicalRecordSchema);
module.exports = MEDIRECORD