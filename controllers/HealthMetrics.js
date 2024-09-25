var Health = require('../model/HealthMetrics');

exports.HealthCreate = async function (req, res, next) {
  try {

    let HealthCreate = await Health.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Health Create Successfull",
      data: HealthCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.HealthFind = async function (req, res, next) {
  try {
    let Healthdata = await Health.find().populate('recordedBy patient')

    res.status(200).json({
      status: "Success",
      message: "Health Found Successfull",
      data: Healthdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.HealthUpdate = async function (req, res, next) {
  try {
    let Healthupdate = await Health.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Health update Successfull",
      data: Healthupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.HealthDelete = async function (req, res, next) {
  try {
    let Healthdelete = await Health.findByIdAndDelete(req.params.id)
    if (!Healthdelete) {
      res.status(900).json({
        status: "Error",
        message: "Health Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "Health delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}