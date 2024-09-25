var Doctor = require('../model/Doctor');

exports.DoctorCreate = async function (req, res, next) {
  try {

    let DoctorCreate = await Doctor.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Doctor Create Successfull",
      data: DoctorCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.DoctorFind = async function (req, res, next) {
  try {
    let Doctordata = await Doctor.find()

    res.status(200).json({
      status: "Success",
      message: "Doctor Found Successfull",
      data: Doctordata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.DoctorUpdate = async function (req, res, next) {
  try {
    let Doctorupdate = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Doctor update Successfull",
      data: Doctorupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.DoctorDelete = async function (req, res, next) {
  try {
    let Doctordelete = await Doctor.findByIdAndDelete(req.params.id)
    if (!Doctordelete) {
      res.status(900).json({
        status: "Error",
        message: "Doctor Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Doctor delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}