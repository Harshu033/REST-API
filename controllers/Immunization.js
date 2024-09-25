var Immunization = require('../model/Immunization');

exports.ImmunizationCreate = async function (req, res, next) {
  try {

    let ImmunizationCreate = await Immunization.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Immunization Create Successfull",
      data: ImmunizationCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.ImmunizationFind = async function (req, res, next) {
  try {
    let Immunizationdata = await Immunization.find().populate('administeredBy patient')

    res.status(200).json({
      status: "Success",
      message: "Immunization Found Successfull",
      data: Immunizationdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.ImmunizationUpdate = async function (req, res, next) {
  try {
    let Immunizationupdate = await Immunization.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Immunization update Successfull",
      data: Immunizationupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.ImmunizationDelete = async function (req, res, next) {
  try {
    let Immunizationdelete = await Immunization.findByIdAndDelete(req.params.id)
    if (!Immunizationdelete) {
      res.status(900).json({
        status: "Error",
        message: "Immunization Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Immunization delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}