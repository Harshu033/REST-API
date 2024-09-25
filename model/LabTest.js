const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const LabTestSchema = new Schema({
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
    testType: {
        type: String,
        required: true,
    },
    dateRequested: {
        type: Date,
        default: Date.now,
    },
    result: {
        type: String,
        default: 'Pending',
    },
    resultDate: Date,
});

const LABTEST = mongoose.model('LabTest', LabTestSchema);
module.exports = LABTEST