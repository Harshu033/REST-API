const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const DiagnosticImagingSchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    imagingType: {
        type: String, 
        required: true,
    },
    imageLink: {
        type: String, 
    },
    dateTaken: {
        type: Date,
        required: true,
    },
    results: String,
    interpretedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },
});

const DIAGNOSTIC = mongoose.model('DiagnosticImaging', DiagnosticImagingSchema);
module.exports = DIAGNOSTIC