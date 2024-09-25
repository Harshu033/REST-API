var notification = require('../model/notification');


exports.notificationCreate = async function (req, res, next) {
  try {

    let notificationCreate = await notification.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "notification Create Successfull",
      data: notificationCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.notificationFind = async function (req, res, next) {
  try {
    let notificationdata = await notification.find().populate('user')

    res.status(200).json({
      status: "Success",
      message: "notification Found Successfull",
      data: notificationdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}
