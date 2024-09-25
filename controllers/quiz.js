var quiz = require('../model/quiz');

exports.quiz_Create = async function (req, res, next) {
  try {
    let quizs = await quiz.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "quiz Create Successfull",
      data: quizs,

    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.quizfind = async function (req, res, next) {
  try {

    let Typefind = await quiz.find()

    res.status(200).json({
      status: "Success",
      message: "quiz Found Successfull",
      data: Typefind
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.quizUpdate = async function (req, res, next) {
  try {
    let quizupdate = await quiz.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({
      status: "Success",
      message: "quiz update Successfull",
      data: quizupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.quizDelete = async function (req, res, next) {
  try {
    let quizdelete = await quiz.findByIdAndDelete(req.params.id)
    if (!quizdelete) {
      res.status(900).json({
        status: "Error",
        message: "quiz Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "quiz delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}