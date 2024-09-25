const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['Doctor', 'Nurse', 'Admin', 'Receptionist'], 
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

const USER = mongoose.model('User', UserSchema);
module.exports = USER