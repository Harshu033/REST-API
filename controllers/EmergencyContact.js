var Emergency = require('../model/EmergencyContact');

exports.EmergencyCreate = async function (req, res, next) {
  try {

    let EmergencyCreate = await Emergency.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Emergency Create Successfull",
      data: EmergencyCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.EmergencyFind = async function (req, res, next) {
  try {
    let Emergencydata = await Emergency.find().populate('patient')

    res.status(200).json({
      status: "Success",
      message: "Emergency Found Successfull",
      data: Emergencydata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.EmergencyUpdate = async function (req, res, next) {
  try {
    let Emergencyupdate = await Emergency.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Emergency update Successfull",
      data: Emergencyupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.EmergencyDelete = async function (req, res, next) {
  try {
    let Emergencydelete = await Emergency.findByIdAndDelete(req.params.id)
    if (!Emergencydelete) {
      res.status(900).json({
        status: "Error",
        message: "Emergency Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Emergency delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}