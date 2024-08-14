var ADMIN = require('../model/admin');
var jwt = require('jsonwebtoken');

exports.secure = async function (req, res, next) {
  try {
    let token = req.headers.authorization
    
    if (!token) {
      throw new Error("Please Attach token")
    }
    var decoded = jwt.verify(token, 'surat');
    
    
    let adminCheck = await ADMIN.findById(decoded.id);

    if (!adminCheck) {
      throw new Error("User Not Found")
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

exports.AdminCreate = async function (req, res, next) {
  try {
    let adminCreate = await ADMIN.create(req.body)
    res.status(201).json({
      status: "Success",
      message: "user Create Successfull",
      data: adminCreate
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.adminFind = async function (req, res, next) {
  try {
    let token = req.headers.authorization

    if (!token) {
      throw new Error("Please Attach token")
    }
    var decoded = jwt.verify(token, 'surat');

    let admindata = await ADMIN.findById(decoded.id)
    res.status(200).json({
      status: "Success",
      message: "user Found Successfull",
      data: admindata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.Adminlogin = async function (req, res, next) {
  try {
    let adminLogin = await ADMIN.findOne({ email: req.body.email })
    let passwordC = await ADMIN.findOne({ password: req.body.password })
    
    if (!adminLogin) {
      throw new Error("User Not Found!")
    } else if (!passwordC) {
      throw new Error("Wrong Password!")
    }
    var token = jwt.sign({ id: adminLogin._id }, 'surat');
    
    res.status(200).json({
      status: "Success",
      message: "user login Successfull",
      data: adminLogin,
      token
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.adminUpdate = async function (req, res, next) {
  try {
    let adminupdate = await ADMIN.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "user update Successfull",
      data: adminupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.AdminDelete = async function (req, res, next) {
  try {
    let admindelete = await ADMIN.findByIdAndDelete(req.params.id)
    if (!admindelete) {
      res.status(900).json({
        status: "Error",
        message: "user Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "user delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}