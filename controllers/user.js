var USERS = require('../model/user');
var jwt = require('jsonwebtoken');
// var ADMIN = require('../model/admin');

exports.mixsecure = async function (req, res, next) {
  try {
    let usertoken = req.headers.usertoken
    let admintoken = req.headers.admintoken
    // console.log(usertoken, admintoken);
    if (!usertoken && !admintoken) {
      throw new Error("Please Attach token")
    }
    if (usertoken) {
      var decoded = jwt.verify(usertoken, 'surat');
      req.userId = decoded.id

    } else {
      var decoded = jwt.verify(admintoken, 'surat');
      req.adminId = decoded.id
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

exports.secure = async function (req, res, next) {
  try {
    let token = req.headers.authorization

    if (!token) {
      throw new Error("Please Attach token")
    }
    var decoded = jwt.verify(token, 'surat');
    req.User = decoded.id
    let userCheck = await USERS.findById(decoded.id);

    if (!userCheck) {
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

exports.userCreate = async function (req, res, next) {
  let pass = req.body.password
  let con = req.body.confirmpassword

  // console.log(pass, con, "+++-----");

  try {
    if (pass == con) {
      // const btpass = await bcrypt.hash(req.body.password, 8);
      // req.body.password = btpass;
      let userCreate = await USERS.create(req.body)
      // console.log(userCreate, "newU");

      res.status(201).json({
        status: "Success",
        message: "user Create Successfull",
        data: userCreate
      })
    } else {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.userfindAll = async function (req, res, next) {
  try {

    let userFound = await USERS.find();
    res.status(200).json({
      status: "Success",
      message: "user Found Successfull",
      data: userFound
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
    let adminemail = await USERS.findOne({ email: req.body.email })
    let adminpass = await USERS.findOne({ password: adminemail.password })

    if (!adminemail) {
      throw new Error("User Not Found!")
    } else if (!adminpass) {
      throw new Error("Wrong Password!")
    }
    var token = jwt.sign({ id: adminemail._id }, 'surat');

    res.status(200).json({
      status: "Success",
      message: "user login Successfull",
      data: adminemail,
      token
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
    let userdelete = await USERS.findByIdAndDelete(req.params.id)
    if (!userdelete) {
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

exports.userupdate = async function (req, res, next) {
  try {
    let update = await USERS.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "user update Successfull",
      data: update
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

