var express = require('express');
var router = express.Router();
let Cc = require('../controllers/contact')

router.post('/create', Cc.ConCreat);

router.get('/showAll', Cc.secure, Cc.ConFindAll);

router.patch('/:id', Cc.secure,Cc.ConUpdate);

router.delete('/:id', Cc.secure,Cc.ConDelete);

module.exports = router;
