var express = require('express');
let user = require("../controllers/User");
let Emergency = require("../controllers/EmergencyContact");
var router = express.Router();

router.post('/create', user.secure, Emergency.EmergencyCreate);

router.get('/findAll', user.secure, Emergency.EmergencyFind);

// router.patch('/:id', user.secure, Emergency.EmergencyUpdate);

// router.delete('/:id', user.secure, Emergency.EmergencyDelete);

module.exports = router;