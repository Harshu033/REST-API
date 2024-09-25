const mongoose = require('mongoose');
let Schema = mongoose.Schema
    
let contact = new Schema({
    name: {
        type: String,
    },
    phoneNo1: {
        type: Number,
    },
    phoneNo2: {
        type: Number,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    offic_add: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

let CONTACT = mongoose.model("contact", contact)
module.exports = CONTACT