var express = require('express');
let user = require("../controllers/user");
let question = require("../controllers/question");
var router = express.Router();

router.post('/create', user.secure, question.questionCreate);

router.get('/search/:key', question.searchQuestions);

router.get('/findAll', user.secure, question.questionFind);

router.patch('/:id', user.secure, question.questionUpdate);

router.delete('/:id', user.secure, question.questionDelete);

module.exports = router;
