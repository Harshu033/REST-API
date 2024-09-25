var express = require('express');
let user = require("../controllers/User");
let Vitals = require("../controllers/Vitals");
var router = express.Router();

router.post('/create', user.secure, Vitals.VitalsCreate);

router.get('/findAll', user.secure, Vitals.VitalsFind);

// router.patch('/:id', user.secure, Vitals.VitalsUpdate);

// router.delete('/:id', user.secure, Vitals.VitalsDelete);

module.exports = router;