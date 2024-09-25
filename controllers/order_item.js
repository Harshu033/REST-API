var orderitem = require('../model/order_item');

exports.orderitemCreate = async function (req, res, next) {
    try {
        let orderitemCreate = await orderitem.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "orderitem Create Successfull",
            data: orderitemCreate,
        })
    } catch
    (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.orderitemFind = async function (req, res, next) {
    try {
        let orderitemdata = await orderitem.find().populate('product')

        res.status(200).json({
            status: "Success",
            message: "orderitem Found Successfull",
            data: orderitemdata
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.orderitemDelete = async function (req, res, next) {
    try {
        let orderitemdelete = await orderitem.findByIdAndDelete(req.params.id)
        if (!orderitemdelete) {
            res.status(900).json({
                status: "Error",
                message: "orderitem Not Found",
            })
        } else {
            res.status(200).json({
                status: "Success",
                message: "orderitem delete Successfull",
            })
        }
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message,
        })
    }
}