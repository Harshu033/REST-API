var express = require('express');
let orderitem = require("../controllers/order_item");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, orderitem.orderitemCreate);

router.get('/findAll', user.secure, orderitem.orderitemFind);

router.delete('/:id', user.secure, orderitem.orderitemDelete);

module.exports = router;
