const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'items',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'shipped'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

let ORDER = mongoose.model('order', order);
module.exports = ORDER