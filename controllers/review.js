var review = require('../model/review');

exports.reviewCreate = async function (req, res, next) {
  try {

    let reviewCreate = await review.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "review Create Successfull",
      data: reviewCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.reviewFind = async function (req, res, next) {
  try {

    let reviewdata = await review.find().populate('itemId').populate('userId')

    res.status(200).json({
      status: "Success",
      message: "review Found Successfull",
      data: reviewdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}
