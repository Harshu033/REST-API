var salesReport = require('../model/salesReport');

exports.salesReportCreate = async function (req, res, next) {
    try {

        let salesReportCreate = await salesReport.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "salesReport Create Successfull",
            data: salesReportCreate,
        })
    } catch
    (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.salesReportFind = async function (req, res, next) {
    try {
        let salesReportdata = await salesReport.find()

        res.status(200).json({
            status: "Success",
            message: "salesReport Found Successfull",
            data: salesReportdata
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}
