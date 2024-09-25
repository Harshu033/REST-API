var quiz_Type = require('../model/quiz_Type');

exports.quiz_tc = async function (req, res, next) {
  try {
    let quizType = await quiz_Type.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "quiz_Type Create Successfull",
      data: quizType,

    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.quiz_Typefind = async function (req, res, next) {
  try {

    let Typefind = await quiz_Type.find()

    res.status(200).json({
      status: "Success",
      message: "quiz_Type Found Successfull",
      data: Typefind
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.quiz_TypeUpdate = async function (req, res, next) {
  try {
    let quiz_Typeupdate = await quiz_Type.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "quiz_Type update Successfull",
      data: quiz_Typeupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.quiz_TypeDelete = async function (req, res, next) {
  try {
    let quiz_Typedelete = await quiz_Type.findByIdAndDelete(req.params.id)
    if (!quiz_Typedelete) {
      res.status(900).json({
        status: "Error",
        message: "quiz_Type Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "quiz_Type delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}