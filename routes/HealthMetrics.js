var express = require('express');
let user = require("../controllers/User");
let Health = require("../controllers/HealthMetrics");
var router = express.Router();

router.post('/create', user.secure, Health.HealthCreate);

router.get('/findAll', user.secure, Health.HealthFind);

// router.patch('/:id', user.secure, Health.HealthUpdate);

// router.delete('/:id', user.secure, Health.HealthDelete);

module.exports = router;