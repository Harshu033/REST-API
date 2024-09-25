const mongoose = require('mongoose');
let Schema = mongoose.Schema

let admin = Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

let ADMIN = mongoose.model("admin", admin)
module.exports = ADMIN