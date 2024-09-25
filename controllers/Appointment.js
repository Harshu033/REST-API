var Appointment = require('../model/Appointment');

exports.AppointmentCreate = async function (req, res, next) {
  try {

    let AppointmentCreate = await Appointment.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Appointment Create Successfull",
      data: AppointmentCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.AppointmentFind = async function (req, res, next) {
  try {
    let Appointmentdata = await Appointment.find().populate('patient doctor')

    res.status(200).json({
      status: "Success",
      message: "Appointment Found Successfull",
      data: Appointmentdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.AppointmentUpdate = async function (req, res, next) {
  try {
    let Appointmentupdate = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Appointment update Successfull",
      data: Appointmentupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.AppointmentDelete = async function (req, res, next) {
  try {
    let Appointmentdelete = await Appointment.findByIdAndDelete(req.params.id)
    if (!Appointmentdelete) {
      res.status(900).json({
        status: "Error",
        message: "Appointment Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Appointment delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}