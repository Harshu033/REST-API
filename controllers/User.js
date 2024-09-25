var user = require('../model/User');
var jwt = require('jsonwebtoken');

exports.secure = async function (req, res, next) {
  try {

    let token = req.headers.authorization

    if (!token) {
      throw new Error("Please Attach token")
    }
    var decoded = jwt.verify(token, 'surat');

    let userCheck = await user.findById(decoded.id);

    if (!userCheck) {
      throw new Error("user Not Found")
    }
    next()
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.userCreate = async function (req, res, next) {
  try {

    let userCreate = await user.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "user Create Successfull",
      data: userCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.userFind = async function (req, res, next) {
  try {
    let userdata = await user.find()

    res.status(200).json({
      status: "Success",
      message: "user Found Successfull",
      data: userdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.userlogin = async function (req, res, next) {
  try {
    let userLogin = await user.findOne({ email: req.body.email })
    let passwordC = await user.findOne({ password: req.body.password })

    if (!userLogin) {
      throw new Error("user Not Found!")
    } else if (!passwordC) {
      throw new Error("Wrong Password!")
    }
    var token = jwt.sign({ id: userLogin._id }, 'surat');

    res.status(200).json({
      status: "Success",
      message: "user login Successfull",
      data: userLogin,
      token
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.userUpdate = async function (req, res, next) {
  try {
    let userupdate = await user.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "user update Successfull",
      data: userupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.userDelete = async function (req, res, next) {
  try {
    let userdelete = await user.findByIdAndDelete(req.params.id)
    if (!userdelete) {
      res.status(900).json({
        status: "Error",
        message: "user Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "User delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}