var express = require('express');
var router = express.Router();
let Cc = require('../controllers/contact')
let CU = require('../controllers/user')

router.post('/create', CU.mixsecure, Cc.ConCreat);

router.get('/showAll', CU.mixsecure,Cc.ConFindAll);

router.patch('/:id', Cc.secure, Cc.ConUpdate);

router.delete('/:id', Cc.secure, Cc.ConDelete);

module.exports = router;
