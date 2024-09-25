const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
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
  medications: [{
    name: String,
    dosage: String,
    duration: String,
  }],
  dateIssued: {
    type: Date,
    default: Date.now,
  },
  instructions: String,
});

const PRESCRIPTION = mongoose.model('Prescription', PrescriptionSchema);
module.exports = PRESCRIPTION