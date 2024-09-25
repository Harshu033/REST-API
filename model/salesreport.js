const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesReport = new Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    totalSales: { type: Number, required: true },
    numberOfOrders: { type: Number, required: true }
  });
  
  const SALESREPORT = mongoose.model('SalesReport', salesReport);
  module.exports = SALESREPORT;