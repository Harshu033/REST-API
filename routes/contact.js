var express = require('express');
var router = express.Router();
let Cc = require('../controllers/contact')

router.get('/', function (req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.post('/create', Cc.ConCreat);

router.get('/showAll', Cc.ConFindAll);

router.patch('/:id', Cc.ConUpdate);

router.delete('/:id', Cc.ConDelete);

module.exports = router;
