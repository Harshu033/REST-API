var USERS = require('../model/user');

exports.userCreate = async function (req, res, next) {
    let pass = req.body.password
    let con = req.body.confirmpassword

    try {
        if (pass == con) {
            // const btpass = await bcrypt.hash(req.body.password, 8);
            // req.body.password = btpass;
            let userCreate = await USERS.create(req.body)
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
      let userFound = await USERS.find()
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
      res.status(200).json({
        status: "Success",
        message: "user login Successfull",
        data: adminemail
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
      let update = await USERS.findByIdAndUpdate(req.params.id, req.body, { new: truser })
  
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