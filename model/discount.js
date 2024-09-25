const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discount = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    percentage: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
  });
  
  const DISCOUNT = mongoose.model('Discount', discount);
  module.exports = DISCOUNT;
  