var Access = require('../model/accessControl');

exports.AccessCreate = async function (req, res, next) {
  try {

    let AccessCreate = await Access.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Access Create Successfull",
      data: AccessCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.AccessFind = async function (req, res, next) {
  try {
    let Accessdata = await Access.find().populate('resourceId user')

    res.status(200).json({
      status: "Success",
      message: "Access Found Successfull",
      data: Accessdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.AccessUpdate = async function (req, res, next) {
  try {
    let Accessupdate = await Access.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Access update Successfull",
      data: Accessupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.AccessDelete = async function (req, res, next) {
  try {
    let Accessdelete = await Access.findByIdAndDelete(req.params.id)
    if (!Accessdelete) {
      res.status(900).json({
        status: "Error",
        message: "Access Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Access delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}