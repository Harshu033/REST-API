var Allergey = require('../model/Allergy');

exports.AllergeyCreate = async function (req, res, next) {
  try {

    let AllergeyCreate = await Allergey.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Allergey Create Successfull",
      data: AllergeyCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.AllergeyFind = async function (req, res, next) {
  try {
    let Allergeydata = await Allergey.find().populate('recordedBy patient')

    res.status(200).json({
      status: "Success",
      message: "Allergey Found Successfull",
      data: Allergeydata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.AllergeyUpdate = async function (req, res, next) {
  try {
    let Allergeyupdate = await Allergey.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Allergey update Successfull",
      data: Allergeyupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.AllergeyDelete = async function (req, res, next) {
  try {
    let Allergeydelete = await Allergey.findByIdAndDelete(req.params.id)
    if (!Allergeydelete) {
      res.status(900).json({
        status: "Error",
        message: "Allergey Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Allergey delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}