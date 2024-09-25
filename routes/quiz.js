var express = require('express');
let quiz = require("../controllers/quiz");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, quiz.quiz_Create);

router.get('/showAll', user.secure, quiz.quizfind);

router.patch('/:id', user.secure, quiz.quizUpdate);

router.delete('/:id', user.secure, quiz.quizDelete);

module.exports = router;
