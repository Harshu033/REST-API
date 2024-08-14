var express = require('express');
let Ad = require("../controllers/admin");
var router = express.Router();

router.post('/signup', Ad.AdminCreate);

router.get('/showAll', Ad.secure, Ad.adminFind);

router.post('/login', Ad.Adminlogin);

router.patch('/:id', Ad.secure, Ad.adminUpdate);

router.delete('/:id', Ad.secure, Ad.AdminDelete);

module.exports = router;
