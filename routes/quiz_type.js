var express = require('express');
let quiz_Type = require("../controllers/quiz_type");
let user = require("../controllers/user");
var router = express.Router();

router.post('/type', user.secure, quiz_Type.quiz_tc);

router.get('/showAll', user.secure, quiz_Type.quiz_Typefind);

router.patch('/:id', user.secure, quiz_Type.quiz_TypeUpdate);

router.delete('/:id', user.secure, quiz_Type.quiz_TypeDelete);

module.exports = router;