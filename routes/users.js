var express = require('express');
var router = express.Router();
let user = require('../controllers/user')

router.post('/signup', user.userCreate);

router.post('/login', user.userlogin);

router.get('/find', user.secure, user.userfindAll);

router.delete('/:id', user.secure, user.userDelete);

router.patch('/:id', user.secure, user.userupdate);

module.exports = router;