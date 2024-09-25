var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Medical_record')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err.message))

var User = require('./routes/User');
var Patient = require('./routes/Patient');
var Doctor = require('./routes/Doctor');
var MedicalRecord = require('./routes/MedicalRecord');
var Appointment = require('./routes/Appointment');
var Prescription = require('./routes/Prescription');
var LabTest = require('./routes/LabTest');
var Insurance = require('./routes/Insurance');
var Billing = require('./routes/Billing');
var Allergy = require('./routes/Allergy');
var Vitals = require('./routes/Vitals');
var Immunization = require('./routes/Immunization');
var Surgery = require('./routes/Surgery');
var EmergencyContact = require('./routes/EmergencyContact');
var MedicationAdministration = require('./routes/MedicationAdministration');
var DiagnosticImaging = require('./routes/DiagnosticImaging');
var InsuranceClaim = require('./routes/InsuranceClaim');
var HealthMetrics = require('./routes/HealthMetrics');
var AccessControl = require('./routes/AccessControl');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', User);
app.use('/patient', Patient);
app.use('/doctor', Doctor);
app.use('/medicalRecord', MedicalRecord);
app.use('/appointment', Appointment);
app.use('/prescription', Prescription);
app.use('/labtest', LabTest);
app.use('/insurance', Insurance);
app.use('/billing', Billing);
app.use('/allergy', Allergy);
app.use('/vitals', Vitals);
app.use('/immunization', Immunization);
app.use('/surgery', Surgery);
app.use('/emergency', EmergencyContact);
app.use('/mediAdmi', MedicationAdministration);
app.use('/diagnosticImaging', DiagnosticImaging);
app.use('/insuranceClaim', InsuranceClaim);
app.use('/healthMetrics', HealthMetrics);
app.use('/accessControl', AccessControl);



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