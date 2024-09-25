var express = require('express');
let user = require("../controllers/User");
let MedicalRecord = require("../controllers/MedicalRecord");
var router = express.Router();

router.post('/create', user.secure, MedicalRecord.MedicalRecordCreate);

router.get('/findAll', user.secure, MedicalRecord.MedicalRecordFind);

router.patch('/:id', user.secure, MedicalRecord.MedicalRecordUpdate);

router.delete('/:id', user.secure, MedicalRecord.MedicalRecordDelete);

module.exports = router;