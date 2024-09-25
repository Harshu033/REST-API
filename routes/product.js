var express = require('express');
let product = require("../controllers/product");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, product.upload.array('images', 10), product.productCreate);

router.get('/findAll', user.secure, product.productFind);

router.patch('/:id', user.secure, product.upload.array('images', 10), product.productUpdate);

router.delete('/:id', user.secure, product.productDelete);

module.exports = router;