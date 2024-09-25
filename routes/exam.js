var express = require('express');
let user = require("../controllers/user");
let exam = require("../controllers/exam");
var router = express.Router();

router.post('/create', user.secure, exam.examCreate);

router.get('/findAll', user.secure, exam.examFind);

router.patch('/:id', user.secure, exam.examUpdate);

router.delete('/:id', user.secure, exam.examDelete);

module.exports = router;
