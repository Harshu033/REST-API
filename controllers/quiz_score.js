var quiz_Score = require('../model/quiz_score');

exports.quiz_User = async function (req, res, next) {
  try {
    let quiz_User = await quiz_Score.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "quiz_Score Create Successfull",
      data: quiz_User,
    })

  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.quiz_ScoreFind = async function (req, res, next) {
  try {

    let quiz_Scoredata = await quiz_Score.find().populate('quiz').populate('user')

    res.status(200).json({
      status: "Success",
      message: "quiz_Score Found Successfull",
      data: quiz_Scoredata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}


































// exports.quiz_ScoreUpdate = async function (req, res, next) {
//   try {
//     let quiz_Scoreupdate = await quiz_Score.findByIdAndUpdate(req.params.id, req.body, { new: true })

//     res.status(200).json({
//       status: "Success",
//       message: "quiz_Score update Successfull",
//       data: quiz_Scoreupdate
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "Fail",
//       message: error.message
//     })
//   }
// }

// exports.quiz_ScoreDelete = async function (req, res, next) {
//   try {
//     let quiz_Scoredelete = await quiz_Score.findByIdAndDelete(req.params.id)
//     if (!quiz_Scoredelete) {
//       res.status(900).json({
//         status: "Error",
//         message: "quiz_Score Not Found",
//       })
//     } else {
//       res.status(200).json({
//         status: "Success",
//         message: "quiz_Score delete Successfull",
//       })
//     }
//   } catch (error) {
//     res.status(404).json({
//       status: "Fail",
//       message: error.message,
//     })
//   }
// }