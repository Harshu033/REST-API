var express = require('express');
let user = require("../controllers/User");
let Diagnos = require("../controllers/DiagnosticImaging");
var router = express.Router();

router.post('/create', user.secure, Diagnos.DiagnosCreate);

router.get('/findAll', user.secure, Diagnos.DiagnosFind);

// router.patch('/:id', user.secure, Diagnos.DiagnosUpdate);

// router.delete('/:id', user.secure, Diagnos.DiagnosDelete);

module.exports = router;