var express = require('express');
let user = require("../controllers/User");
let Patient = require("../controllers/Patient");
var router = express.Router();

router.post('/create', user.secure, Patient.PatientCreate);

router.get('/findAll', user.secure, Patient.PatientFind);

router.patch('/:id', user.secure, Patient.PatientUpdate);

router.delete('/:id', user.secure, Patient.PatientDelete);

module.exports = router;