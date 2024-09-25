var express = require('express');
let user = require("../controllers/User");
let Billing = require("../controllers/Billing");
var router = express.Router();

router.post('/create', user.secure, Billing.BillingCreate);

router.get('/findAll', user.secure, Billing.BillingFind);

// router.patch('/:id', user.secure, Billing.BillingUpdate);

// router.delete('/:id', user.secure, Billing.BillingDelete);

module.exports = router;