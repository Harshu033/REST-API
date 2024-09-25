const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notification = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false }
});
  
const NOTIFICATION = mongoose.model('Notification', notification);
module.exports = NOTIFICATION;
