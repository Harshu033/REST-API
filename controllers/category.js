var category = require('../model/category');

exports.categoryCreate = async function (req, res, next) {
  try {
    let categoryCreate = await category.create(req.body)
  
    res.status(201).json({
      status: "Success",
      message: "categoryor Create Successfull",
      data: categoryCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.categoryFind = async function (req, res, next) {
  try {

    let categorydata = await category.find()

    res.status(200).json({
      status: "Success",
      message: "categoryor Found Successfull",
      data: categorydata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.categoryUpdate = async function (req, res, next) {
  try {
    let categoryupdate = await category.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "categoryor update Successfull",
      data: categoryupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.categoryDelete = async function (req, res, next) {
  try {
    let categorydelete = await category.findByIdAndDelete(req.params.id)
    if (!categorydelete) {
      res.status(900).json({
        status: "Error",
        message: "categoryor Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "category delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}