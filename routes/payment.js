var express = require('express');
let payment = require("../controllers/payment");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, payment.paymentCreate);

router.get('/findAll', user.secure, payment.paymentFind);

module.exports = router;
