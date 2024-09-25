var express = require('express');
let user = require("../controllers/User");
let MediAdmi = require("../controllers/MedicationAdministration");
var router = express.Router();

router.post('/create', user.secure, MediAdmi.MediAdmiCreate);

router.get('/findAll', user.secure, MediAdmi.MediAdmiFind);

// router.patch('/:id', user.secure, MediAdmi.MediAdmiUpdate);

// router.delete('/:id', user.secure, MediAdmi.MediAdmiDelete);

module.exports = router;