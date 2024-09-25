var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err.message))

  var user = require('./routes/user');
  var category = require('./routes/category');
  var product = require('./routes/product');
  var order_item = require('./routes/order_item');
  var order = require('./routes/order');
  var discount = require('./routes/discount');
  var notification = require('./routes/notification');
  var payment = require('./routes/payment');
  var review = require('./routes/review');
  var salesReport = require('./routes/salesreport');
  var shipping = require('./routes/shipping');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', user);
app.use('/category', category);
app.use('/product', product);
app.use('/orderItem', order_item);
app.use('/order', order);
app.use('/discount', discount);
app.use('/notification', notification);
app.use('/payment', payment);
app.use('/review', review);
app.use('/salesReport', salesReport);
app.use('/shipping', shipping);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
