var Insurance = require('../model/Insurance');

exports.InsuranceCreate = async function (req, res, next) {
  try {

    let InsuranceCreate = await Insurance.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Insurance Create Successfull",
      data: InsuranceCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.InsuranceFind = async function (req, res, next) {
  try {
    let Insurancedata = await Insurance.find().populate('patient')

    res.status(200).json({
      status: "Success",
      message: "Insurance Found Successfull",
      data: Insurancedata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.InsuranceUpdate = async function (req, res, next) {
  try {
    let Insuranceupdate = await Insurance.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Insurance update Successfull",
      data: Insuranceupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.InsuranceDelete = async function (req, res, next) {
  try {
    let Insurancedelete = await Insurance.findByIdAndDelete(req.params.id)
    if (!Insurancedelete) {
      res.status(900).json({
        status: "Error",
        message: "Insurance Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Insurance delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}