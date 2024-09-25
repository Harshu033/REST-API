var MedicalRecord = require('../model/MedicalRecord');

exports.MedicalRecordCreate = async function (req, res, next) {
  try {

    let MedicalRecordCreate = await MedicalRecord.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "MedicalRecord Create Successfull",
      data: MedicalRecordCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.MedicalRecordFind = async function (req, res, next) {
  try {
    let MedicalRecorddata = await MedicalRecord.find().populate('patient doctor')

    res.status(200).json({
      status: "Success",
      message: "MedicalRecord Found Successfull",
      data: MedicalRecorddata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.MedicalRecordUpdate = async function (req, res, next) {
  try {
    let MedicalRecordupdate = await MedicalRecord.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "MedicalRecord update Successfull",
      data: MedicalRecordupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.MedicalRecordDelete = async function (req, res, next) {
  try {
    let MedicalRecorddelete = await MedicalRecord.findByIdAndDelete(req.params.id)
    if (!MedicalRecorddelete) {
      res.status(900).json({
        status: "Error",
        message: "MedicalRecord Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "MedicalRecord delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}