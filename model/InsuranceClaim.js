const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const InsuranceClaimSchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    insurance: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Insurance',
        required: true,
    },
    claimDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Denied'],
        default: 'Pending',
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    approvedAmount: Number,
    denialReason: String,
});

const INSURANCECLAIM = mongoose.model('InsuranceClaim', InsuranceClaimSchema);
module.exports = INSURANCECLAIM