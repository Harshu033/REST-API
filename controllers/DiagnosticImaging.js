var Diagnos = require('../model/DiagnosticImaging');

exports.DiagnosCreate = async function (req, res, next) {
  try {

    let DiagnosCreate = await Diagnos.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Diagnos Create Successfull",
      data: DiagnosCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.DiagnosFind = async function (req, res, next) {
  try {
    let Diagnosdata = await Diagnos.find().populate('interpretedBy patient')

    res.status(200).json({
      status: "Success",
      message: "Diagnos Found Successfull",
      data: Diagnosdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.DiagnosUpdate = async function (req, res, next) {
  try {
    let Diagnosupdate = await Diagnos.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Diagnos update Successfull",
      data: Diagnosupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.DiagnosDelete = async function (req, res, next) {
  try {
    let Diagnosdelete = await Diagnos.findByIdAndDelete(req.params.id)
    if (!Diagnosdelete) {
      res.status(900).json({
        status: "Error",
        message: "Diagnos Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Diagnos delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}