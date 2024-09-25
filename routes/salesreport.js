var express = require('express');
let salesReport = require("../controllers/salesReport");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, salesReport.salesReportCreate);

router.get('/findAll', user.secure, salesReport.salesReportFind);

module.exports = router;
