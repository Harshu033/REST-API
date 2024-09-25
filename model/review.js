const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const review = new Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'items',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
let REVIEW = mongoose.model('review', review);
module.exports = REVIEW