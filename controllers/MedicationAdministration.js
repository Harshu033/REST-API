var MediAdmi = require('../model/MedicationAdministration');

exports.MediAdmiCreate = async function (req, res, next) {
    try {

        let MediAdmiCreate = await MediAdmi.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "MediAdmi Create Successfull",
            data: MediAdmiCreate,
        })
    } catch
    (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.MediAdmiFind = async function (req, res, next) {
    try {
        let MediAdmidata = await MediAdmi.find().populate('medication administeredBy patient')

        res.status(200).json({
            status: "Success",
            message: "MediAdmi Found Successfull",
            data: MediAdmidata
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.MediAdmiUpdate = async function (req, res, next) {
    try {
        let MediAdmiupdate = await MediAdmi.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "MediAdmi update Successfull",
            data: MediAdmiupdate
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.MediAdmiDelete = async function (req, res, next) {
    try {
        let MediAdmidelete = await MediAdmi.findByIdAndDelete(req.params.id)
        if (!MediAdmidelete) {
            res.status(900).json({
                status: "Error",
                message: "MediAdmi Not Found",
            })
        } else {
            res.status(200).json({
                status: "Success",
                message: "MediAdmi delete Successfull",
            })
        }
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message,
        })
    }
}