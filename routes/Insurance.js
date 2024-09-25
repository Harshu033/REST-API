var express = require('express');
let user = require("../controllers/User");
let Insurance = require("../controllers/Insurance");
var router = express.Router();

router.post('/create', user.secure, Insurance.InsuranceCreate);

router.get('/findAll', user.secure, Insurance.InsuranceFind);

// router.patch('/:id', user.secure, Insurance.InsuranceUpdate);

// router.delete('/:id', user.secure, Insurance.InsuranceDelete);

module.exports = router;