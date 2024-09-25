var express = require('express');
let user = require("../controllers/User");
let InsuranceClaim = require("../controllers/InsuranceClaim");
var router = express.Router();

router.post('/create', user.secure, InsuranceClaim.InsuranceClaimCreate);

router.get('/findAll', user.secure, InsuranceClaim.InsuranceClaimFind);

// router.patch('/:id', user.secure, InsuranceClaim.InsuranceClaimUpdate);

// router.delete('/:id', user.secure, InsuranceClaim.InsuranceClaimDelete);

module.exports = router;