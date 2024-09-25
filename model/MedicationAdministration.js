const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const MedicationAdministrationSchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    medication: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prescription',
        required: true,
    },
    dateAdministered: {
        type: Date,
        required: true,
    },
    dose: {
        type: String,
        required: true,
    },
    administeredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },
});

const MEDICATIONADMINISTRATION = mongoose.model('MedicationAdministration', MedicationAdministrationSchema);
module.exports = MEDICATIONADMINISTRATION