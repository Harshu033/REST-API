var Surgery = require('../model/Surgery');

exports.SurgeryCreate = async function (req, res, next) {
  try {

    let SurgeryCreate = await Surgery.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Surgery Create Successfull",
      data: SurgeryCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.SurgeryFind = async function (req, res, next) {
  try {
    let Surgerydata = await Surgery.find().populate('surgeon patient')

    res.status(200).json({
      status: "Success",
      message: "Surgery Found Successfull",
      data: Surgerydata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.SurgeryUpdate = async function (req, res, next) {
  try {
    let Surgeryupdate = await Surgery.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Surgery update Successfull",
      data: Surgeryupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.SurgeryDelete = async function (req, res, next) {
  try {
    let Surgerydelete = await Surgery.findByIdAndDelete(req.params.id)
    if (!Surgerydelete) {
      res.status(900).json({
        status: "Error",
        message: "Surgery Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Surgery delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}