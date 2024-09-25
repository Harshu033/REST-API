var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/W3school')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err.message));

var user = require('./routes/user');
var category = require('./routes/category');
var item = require('./routes/item');
var order = require('./routes/order');
var review = require('./routes/review');
var question = require('./routes/question');
var exam = require('./routes/exam');

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
app.use('/item', item);
app.use('/order', order);
app.use('/review', review);
app.use('/question', question);
app.use('/exam', exam);

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
