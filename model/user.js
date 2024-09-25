const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
    
let USER = mongoose.model('User', User);
module.exports = USER