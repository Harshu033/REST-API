const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const AllergySchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    substance: {
        type: String,
        required: true,
    },
    reaction: {
        type: String,
        required: true,
    },
    severity: {
        type: String,
        enum: ['Mild', 'Moderate', 'Severe'],
        required: true,
    },
    dateRecorded: {
        type: Date,
        default: Date.now,
    },
    recordedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },
});

const ALLERGY = mongoose.model('Allergy', AllergySchema);
module.exports = ALLERGY