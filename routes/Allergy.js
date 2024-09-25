var express = require('express');
let user = require("../controllers/User");
let Allergey = require("../controllers/Allergy");
var router = express.Router();

router.post('/create', user.secure, Allergey.AllergeyCreate);

router.get('/findAll', user.secure, Allergey.AllergeyFind);

// router.patch('/:id', user.secure, Allergey.AllergeyUpdate);

// router.delete('/:id', user.secure, Allergey.AllergeyDelete);

module.exports = router;