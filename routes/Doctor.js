var express = require('express');
let user = require("../controllers/User");
let Doctor = require("../controllers/Doctor");
var router = express.Router();

router.post('/create', user.secure, Doctor.DoctorCreate);

router.get('/findAll', user.secure, Doctor.DoctorFind);

router.patch('/:id', user.secure, Doctor.DoctorUpdate);

router.delete('/:id', user.secure, Doctor.DoctorDelete);

module.exports = router;