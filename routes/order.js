var express = require('express');
let order = require("../controllers/order");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', order.orderCreate);

router.get('/findAll', user.secure, order.orderFind);


module.exports = router;
