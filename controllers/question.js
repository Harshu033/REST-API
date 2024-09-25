var question = require('../model/question');


exports.questionCreate = async function (req, res, next) {
  try {

    let questionCreate = await question.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "question Create Successfull",
      data: questionCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.searchQuestions = async function (req, res, next) {
  try {
    
    let search = {
      "$or": [
        { "question": { $regex: req.params.key } },
        { "options": { $regex: req.params.key } },
        { "correctAnswer": { $regex: req.params.key } },
      ]
    }
    // console.log(req.params.key, "==");

    let questiondata = await question.find(search);

    res.status(200).json({
      status: "Success",
      message: "Questions found successfully",
      data: questiondata
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    });
  }
};

exports.questionFind = async function (req, res, next) {
  try {

    let questiondata = await question.find()

    res.status(200).json({
      status: "Success",
      message: "question Found Successfull",
      data: questiondata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.questionUpdate = async function (req, res, next) {
  try {
    let questionupdate = await question.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "question update Successfull",
      data: questionupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.questionDelete = async function (req, res, next) {
  try {
    let questiondelete = await question.findByIdAndDelete(req.params.id)
    if (!questiondelete) {
      res.status(900).json({
        status: "Error",
        message: "question Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "question delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}