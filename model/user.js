const mongoose = require('mongoose');
let Schema = mongoose.Schema

const user = new Schema({
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
    profile: {
        type: String,
        required: true
    }
});

let USER = mongoose.model("user", user)
module.exports = USER
