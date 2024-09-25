var express = require('express');
let user = require("../controllers/User");
let LabTest = require("../controllers/LabTest");
var router = express.Router();

router.post('/create', user.secure, LabTest.LabTestCreate);

router.get('/findAll', user.secure, LabTest.LabTestFind);

// router.patch('/:id', user.secure, LabTest.LabTestUpdate);

// router.delete('/:id', user.secure, LabTest.LabTestDelete);

module.exports = router;