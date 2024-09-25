const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItem = new  Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }   
})

let ORDERITEM = mongoose.model('OrderItem', orderItem);
module.exports = ORDERITEM