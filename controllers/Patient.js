var Patient = require('../model/Patient');

exports.PatientCreate = async function (req, res, next) {
  try {

    let PatientCreate = await Patient.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Patient Create Successfull",
      data: PatientCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.PatientFind = async function (req, res, next) {
  try {
    let Patientdata = await Patient.find()

    res.status(200).json({
      status: "Success",
      message: "Patient Found Successfull",
      data: Patientdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.PatientUpdate = async function (req, res, next) {
  try {
    let Patientupdate = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Patient update Successfull",
      data: Patientupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.PatientDelete = async function (req, res, next) {
  try {
    let Patientdelete = await Patient.findByIdAndDelete(req.params.id)
    if (!Patientdelete) {
      res.status(900).json({
        status: "Error",
        message: "Patient Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Patient delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}