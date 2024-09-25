var express = require('express');
let notification = require("../controllers/notification");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, notification.notificationCreate);

router.get('/findAll', user.secure, notification.notificationFind);


module.exports = router;
