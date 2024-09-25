var express = require('express');
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.upload.single('profile'), user.userCreate);
// router.post('/create', user.userCreate);

router.get('/onlyone', user.secure, user.userFind);

router.post('/userlogin', user.userlogin);

router.patch('/:id', user.upload.single('profile'), user.secure, user.userUpdate); 

router.delete('/:id', user.secure, user.userDelete);

module.exports = router;
