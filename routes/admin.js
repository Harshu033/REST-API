var express = require('express');
let Ad = require("../controllers/admin");
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('admin', { title: 'Express' });
});

router.post('/signup', Ad.AdminCreate);

router.get('/showAll', Ad.adminFind);

router.post('/login', Ad.Adminfind);

router.patch('/:id', Ad.adminUpdate);

router.delete('/:id',Ad.AdminDelete);

module.exports = router;
