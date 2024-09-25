var express = require('express');
let shippingrate = require("../controllers/shipping");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, shippingrate.shippingrateCreate);

router.get('/findAll', user.secure, shippingrate.shippingrateFind);

router.patch('/:id', user.secure, shippingrate.shippingrateUpdate);

router.delete('/:id', user.secure, shippingrate.shippingrateDelete);

module.exports = router;