const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const VitalsSchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    temperature: {
        type: Number, 
        required: true,
    },
    heartRate: {
        type: Number, 
        required: true,
    },
    bloodPressure: {
        systolic: {
            type: Number,
            required: true, 
          },
          diastolic: {
            type: Number,
            required: true, 
          },
    },
    oxygenSaturation: {
        type: Number, 
    },
    respiratoryRate: {
        type: Number, 
    },
});

const VITALS = mongoose.model('Vitals', VitalsSchema);
module.exports = VITALS