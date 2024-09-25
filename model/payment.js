const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentMethod = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['Credit Card', 'Debit Card', 'PayPal'], required: true },
  details: { type: String, required: true } // This might be encrypted or tokenized
});

const PAYMENT = mongoose.model('PaymentMethod', paymentMethod);
module.exports = PAYMENT;