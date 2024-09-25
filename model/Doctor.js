const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true,
    },
    contact: {
        phone: String,
        email: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const DOCTOR = mongoose.model('Doctor', DoctorSchema);
module.exports = DOCTOR