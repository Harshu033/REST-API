const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const EmergencyContactSchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    relationship: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: String,
});

const EMERGENCY = mongoose.model('EmergencyContact', EmergencyContactSchema);
module.exports = EMERGENCY