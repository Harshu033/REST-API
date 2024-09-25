var express = require('express');
let question = require("../controllers/question");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, question.questionCreate);

router.get('/showAll', user.secure, question.questionFind);

router.patch('/:id', user.secure, question.questionUpdate);

router.delete('/:id', user.secure, question.questionDelete);

module.exports = router;
