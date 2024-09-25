var order = require('../model/order');

exports.orderCreate = async function (req, res, next) {
  try {

    let orderCreate = await order.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "order Create Successfull",
      data: orderCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.orderFind = async function (req, res, next) {
  try {

    let orderdata = await order.find().populate('userId').populate('itemId')

    res.status(200).json({
      status: "Success",
      message: "order Found Successfull",
      data: orderdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}