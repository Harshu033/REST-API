var shippingrate = require('../model/shipping');

exports.shippingrateCreate = async function (req, res, next) {
    try {

        let shippingrateCreate = await shippingrate.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "shippingrate Create Successfull",
            data: shippingrateCreate,
        })
    } catch
    (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.shippingrateFind = async function (req, res, next) {
    try {
        let shippingratedata = await shippingrate.find()

        res.status(200).json({
            status: "Success",
            message: "shippingrate Found Successfull",
            data: shippingratedata
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.shippingrateUpdate = async function (req, res, next) {
    try {
        let shippingrateupdate = await shippingrate.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "shippingrate update Successfull",
            data: shippingrateupdate
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.shippingrateDelete = async function (req, res, next) {
    try {
        let shippingratedelete = await shippingrate.findByIdAndDelete(req.params.id)
        if (!shippingratedelete) {
            res.status(900).json({
                status: "Error",
                message: "shippingrate Not Found",
            })
        } else {
            res.status(200).json({
                status: "Success",
                message: "shippingrate delete Successfull",
            })
        }
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message,
        })
    }
}