var express = require('express');
let user = require("../controllers/User");
let Surgery = require("../controllers/Surgery");
var router = express.Router();

router.post('/create', user.secure, Surgery.SurgeryCreate);

router.get('/findAll', user.secure, Surgery.SurgeryFind);

// router.patch('/:id', user.secure, Surgery.SurgeryUpdate);

// router.delete('/:id', user.secure, Surgery.SurgeryDelete);

module.exports = router;