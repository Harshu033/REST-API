var express = require('express');
let user = require("../controllers/user");
let item = require("../controllers/items");
var router = express.Router();

router.post('/create', item.itemCreate);

router.get('/findAll', user.secure, item.itemFind);

router.patch('/:id', user.secure, item.itemUpdate);

router.delete('/:id', user.secure, item.itemDelete);

module.exports = router;
