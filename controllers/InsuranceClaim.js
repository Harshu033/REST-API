var InsuranceClaim = require('../model/InsuranceClaim');

exports.InsuranceClaimCreate = async function (req, res, next) {
  try {

    let InsuranceClaimCreate = await InsuranceClaim.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "InsuranceClaim Create Successfull",
      data: InsuranceClaimCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.InsuranceClaimFind = async function (req, res, next) {
  try {
    let InsuranceClaimdata = await InsuranceClaim.find().populate('insurance patient')

    res.status(200).json({
      status: "Success",
      message: "InsuranceClaim Found Successfull",
      data: InsuranceClaimdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.InsuranceClaimUpdate = async function (req, res, next) {
  try {
    let InsuranceClaimupdate = await InsuranceClaim.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "InsuranceClaim update Successfull",
      data: InsuranceClaimupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.InsuranceClaimDelete = async function (req, res, next) {
  try {
    let InsuranceClaimdelete = await InsuranceClaim.findByIdAndDelete(req.params.id)
    if (!InsuranceClaimdelete) {
      res.status(900).json({
        status: "Error",
        message: "InsuranceClaim Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "InsuranceClaim delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}