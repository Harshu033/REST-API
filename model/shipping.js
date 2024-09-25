const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippingRate = new Schema({
  country: { type: String, required: true },
  rate: { type: Number, required: true }
});

const SHIPPING = mongoose.model('ShippingRate', shippingRate);
module.exports = SHIPPING;
