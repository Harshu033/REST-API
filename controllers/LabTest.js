var LabTest = require('../model/LabTest');

exports.LabTestCreate = async function (req, res, next) {
  try {

    let LabTestCreate = await LabTest.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "LabTest Create Successfull",
      data: LabTestCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.LabTestFind = async function (req, res, next) {
  try {
    let LabTestdata = await LabTest.find().populate('patient doctor')

    res.status(200).json({
      status: "Success",
      message: "LabTest Found Successfull",
      data: LabTestdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.LabTestUpdate = async function (req, res, next) {
  try {
    let LabTestupdate = await LabTest.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "LabTest update Successfull",
      data: LabTestupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.LabTestDelete = async function (req, res, next) {
  try {
    let LabTestdelete = await LabTest.findByIdAndDelete(req.params.id)
    if (!LabTestdelete) {
      res.status(900).json({
        status: "Error",
        message: "LabTest Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "LabTest delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}