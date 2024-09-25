const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const BillingSchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    services: [{
        description: String,
        cost: Number,
        date: Date,
    }],
    totalCost: {
        type: Number,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid'],
        default: 'Pending',
    },
    billingDate: {
        type: Date,
        default: Date.now,
    },
    dueDate: {
        type: Date,
        required: true,
    },
});

const BILLING = mongoose.model('Billing', BillingSchema);
module.exports = BILLING