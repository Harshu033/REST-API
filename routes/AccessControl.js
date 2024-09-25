var express = require('express');
let user = require("../controllers/User");
let Access = require("../controllers/accessControl");
var router = express.Router();

router.post('/create', user.secure, Access.AccessCreate);

router.get('/findAll', user.secure, Access.AccessFind);

// router.patch('/:id', user.secure, Access.AccessUpdate);

// router.delete('/:id', user.secure, Access.AccessDelete);

module.exports = router;