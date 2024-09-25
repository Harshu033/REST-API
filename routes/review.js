var express = require('express');
let user = require("../controllers/user");
let review = require("../controllers/review");
var router = express.Router();

router.post('/create', review.reviewCreate);

router.get('/findAll', user.secure, review.reviewFind);


module.exports = router;
