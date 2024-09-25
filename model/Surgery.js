const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const SurgerySchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    surgeryType: {
        type: String,
        required: true,
    },
    surgeryDate: {
        type: Date,
        required: true,
    },
    surgeon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },
    outcome: {
        type: String,
        default: 'Pending',
    },
    notes: String,
});

const SURGERY = mongoose.model('Surgery', SurgerySchema);
module.exports = SURGERY