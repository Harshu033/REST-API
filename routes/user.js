var express = require('express');
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.userCreate);

router.get('/findAll', user.secure, user.userFind);

router.post('/userlogin', user.userlogin);

router.patch('/:id', user.secure, user.userUpdate);

router.delete('/:id', user.secure, user.userDelete);

module.exports = router;
