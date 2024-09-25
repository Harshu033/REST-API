var express = require('express');
let user = require("../controllers/User");
let Appointment = require("../controllers/appointment");
var router = express.Router();

router.post('/create', user.secure, Appointment.AppointmentCreate);

router.get('/findAll', user.secure, Appointment.AppointmentFind);

router.patch('/:id', user.secure, Appointment.AppointmentUpdate);

router.delete('/:id', user.secure, Appointment.AppointmentDelete);

module.exports = router;