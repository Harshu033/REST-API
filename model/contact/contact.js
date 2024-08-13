const mongoose = require('mongoose');
let Schema = mongoose.Schema

let contact = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo1: {
        type: Number,
        required: true,
        unique: true
    },
    phoneNo2: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    offic_add: {
        type: String,
        required: true,
    }
});

let CONTACT = mongoose.model("contact", contact)
module.exports = CONTACT