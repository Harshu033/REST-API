const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const InsuranceSchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
    policyNumber: {
        type: String,
        required: true,
    },
    coverageDetails: {
        type: String,
    },
    validFrom: {
        type: Date,
        required: true,
    },
    validTo: {
        type: Date,
        required: true,
    },
});

const INSURANCE = mongoose.model('Insurance', InsuranceSchema);
module.exports = INSURANCE