var express = require('express');
let discount = require("../controllers/discount");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, discount.discountCreate);

router.get('/findAll', user.secure, discount.discountFind);

router.patch('/:id', user.secure, discount.discountUpdate);

router.delete('/:id', user.secure, discount.discountDelete);

module.exports = router;
