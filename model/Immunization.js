const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ImmunizationSchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    vaccineName: {
        type: String,
        required: true,
    },
    dateAdministered: {
        type: Date,
        required: true,
    },
    nextDueDate: {
        type: Date, 
    },
    administeredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },
});

const IMMUNIZATION = mongoose.model('Immunization', ImmunizationSchema);
module.exports = IMMUNIZATION