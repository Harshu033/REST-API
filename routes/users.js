var express = require('express');
var router = express.Router();
let user = require('../controllers/user')

router.get('/', function (req, res, next) {
  res.render('users', { title: 'Express' });
});

router.post('/signup', user.userCreate);

router.get('/find', user.userfindAll);

router.post('/login', user.userlogin);

router.delete('/:id', user.userDelete);

router.patch('/:id', user.userupdate);

module.exports = router;