var express = require('express');
let category = require("../controllers/category");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', category.categoryCreate);

router.get('/findAll', user.secure, category.categoryFind);

router.patch('/:id', user.secure, category.categoryUpdate);

router.delete('/:id', user.secure, category.categoryDelete);
    
module.exports = router;
