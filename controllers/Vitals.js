var Vitals = require('../model/Vitals');

exports.VitalsCreate = async function (req, res, next) {
  try {

    let VitalsCreate = await Vitals.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Vitals Create Successfull",
      data: VitalsCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.VitalsFind = async function (req, res, next) {
  try {
    let Vitalsdata = await Vitals.find().populate('patient')

    res.status(200).json({
      status: "Success",
      message: "Vitals Found Successfull",
      data: Vitalsdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.VitalsUpdate = async function (req, res, next) {
  try {
    let Vitalsupdate = await Vitals.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Vitals update Successfull",
      data: Vitalsupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.VitalsDelete = async function (req, res, next) {
  try {
    let Vitalsdelete = await Vitals.findByIdAndDelete(req.params.id)
    if (!Vitalsdelete) {
      res.status(900).json({
        status: "Error",
        message: "Vitals Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Vitals delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}