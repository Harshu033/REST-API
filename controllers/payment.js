var payment = require('../model/payment');

exports.paymentCreate = async function (req, res, next) {
  try {

    let paymentCreate = await payment.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "payment Create Successfull",
      data: paymentCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.paymentFind = async function (req, res, next) {
  try {
    let paymentdata = await payment.find().populate('user')

    res.status(200).json({
      status: "Success",
      message: "payment Found Successfull",
      data: paymentdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}
