var express = require('express');
let user = require("../controllers/User");
let Prescription = require("../controllers/Prescription");
var router = express.Router();

router.post('/create', user.secure, Prescription.PrescriptionCreate);

router.get('/findAll', user.secure, Prescription.PrescriptionFind);

router.patch('/:id', user.secure, Prescription.PrescriptionUpdate);

router.delete('/:id', user.secure, Prescription.PrescriptionDelete);

module.exports = router;