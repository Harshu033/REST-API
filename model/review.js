const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const review = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
  dateCreated: { type: Date, default: Date.now }
});

const REVIEW = mongoose.model('Review', review);
module.exports = REVIEW;
