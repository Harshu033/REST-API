var Prescription = require('../model/Prescription');

exports.PrescriptionCreate = async function (req, res, next) {
  try {

    let PrescriptionCreate = await Prescription.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Prescription Create Successfull",
      data: PrescriptionCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.PrescriptionFind = async function (req, res, next) {
  try {
    let Prescriptiondata = await Prescription.find().populate('patient doctor')

    res.status(200).json({
      status: "Success",
      message: "Prescription Found Successfull",
      data: Prescriptiondata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.PrescriptionUpdate = async function (req, res, next) {
  try {
    let Prescriptionupdate = await Prescription.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Prescription update Successfull",
      data: Prescriptionupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.PrescriptionDelete = async function (req, res, next) {
  try {
    let Prescriptiondelete = await Prescription.findByIdAndDelete(req.params.id)
    if (!Prescriptiondelete) {
      res.status(900).json({
        status: "Error",
        message: "Prescription Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Prescription delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}