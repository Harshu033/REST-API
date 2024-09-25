var express = require('express');
let quiz_Score = require("../controllers/quiz_score");
let user = require("../controllers/user");
var router = express.Router();

router.post('/default', user.secure, quiz_Score.quiz_User);

router.get('/showAll', user.secure, quiz_Score.quiz_ScoreFind);

module.exports = router;
