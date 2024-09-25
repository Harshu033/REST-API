var exam = require('../model/exam');

exports.examCreate = async function (req, res, next) {
  try {

    let examCreate = await exam.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "exam Create Successfull",
      data: examCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.examFind = async function (req, res, next) {
  try {

    let examdata = await exam.find().populate('questions')

    res.status(200).json({
      status: "Success",
      message: "exam Found Successfull",
      data: examdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.examUpdate = async function (req, res, next) {
  try {
    let examupdate = await exam.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "exam update Successfull",
      data: examupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.examDelete = async function (req, res, next) {
  try {
    let examdelete = await exam.findByIdAndDelete(req.params.id)
    if (!examdelete) {
      res.status(900).json({
        status: "Error",
        message: "exam Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "exam delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}