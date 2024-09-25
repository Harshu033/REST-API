var express = require('express');
let user = require("../controllers/User");
let Immunization = require("../controllers/Immunization");
var router = express.Router();

router.post('/create', user.secure, Immunization.ImmunizationCreate);

router.get('/findAll', user.secure, Immunization.ImmunizationFind);

// router.patch('/:id', user.secure, Immunization.ImmunizationUpdate);

// router.delete('/:id', user.secure, Immunization.ImmunizationDelete);

module.exports = router;