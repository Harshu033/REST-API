const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const HealthMetricsSchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    metricType: {
        type: String, 
        required: true,
    },
    value: {
        type: Number, 
        required: true,
    },
    unit: {
        type: String, 
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

const HEALTHMETRICS = mongoose.model('HealthMetrics', HealthMetricsSchema);
module.exports = HEALTHMETRICS