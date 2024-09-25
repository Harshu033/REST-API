var item = require('../model/items');

exports.itemCreate = async function (req, res, next) {
  try {
   
    let itemCreate = await item.create(req.body)
  
    res.status(201).json({
      status: "Success",
      message: "item Create Successfull",
      data: itemCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.itemFind = async function (req, res, next) {
  try {

    let itemdata = await item.find()

    res.status(200).json({
      status: "Success",
      message: "item Found Successfull",
      data: itemdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.itemUpdate = async function (req, res, next) {
  try {
    let itemupdate = await item.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "item update Successfull",
      data: itemupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.itemDelete = async function (req, res, next) {
  try {
    let itemdelete = await item.findByIdAndDelete(req.params.id)
    if (!itemdelete) {
      res.status(900).json({
        status: "Error",
        message: "item Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "item delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}