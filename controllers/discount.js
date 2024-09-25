var discount = require('../model/discount');

exports.discountCreate = async function (req, res, next) {
    try {
        let discountCreate = await discount.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "discount Create Successfull",
            data: discountCreate,
        })
    } catch
    (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.discountFind = async function (req, res, next) {
    try {
        let discountdata = await discount.find().populate('product')

        res.status(200).json({
            status: "Success",
            message: "discount Found Successfull",
            data: discountdata
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.discountUpdate = async function (req, res, next) {
    try {
        let discountupdate = await discount.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "discount update Successfull",
            data: discountupdate
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.discountDelete = async function (req, res, next) {
    try {
        let discountdelete = await discount.findByIdAndDelete(req.params.id)
        if (!discountdelete) {
            res.status(900).json({
                status: "Error",
                message: "discount Not Found",
            })
        } else {
            res.status(200).json({
                status: "Success",
                message: "discount delete Successfull",
            })
        }
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message,
        })
    }
}