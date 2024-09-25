var Billing = require('../model/Billing');

exports.BillingCreate = async function (req, res, next) {
  try {

    let BillingCreate = await Billing.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Billing Create Successfull",
      data: BillingCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.BillingFind = async function (req, res, next) {
  try {
    let Billingdata = await Billing.find().populate('patient')

    res.status(200).json({
      status: "Success",
      message: "Billing Found Successfull",
      data: Billingdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.BillingUpdate = async function (req, res, next) {
  try {
    let Billingupdate = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Billing update Successfull",
      data: Billingupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.BillingDelete = async function (req, res, next) {
  try {
    let Billingdelete = await Billing.findByIdAndDelete(req.params.id)
    if (!Billingdelete) {
      res.status(900).json({
        status: "Error",
        message: "Billing Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Billing delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}