var express = require('express');
let review = require("../controllers/review");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, review.reviewCreate);

router.get('/findAll', user.secure, review.reviewFind);

module.exports = router;
