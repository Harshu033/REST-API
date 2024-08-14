const { token } = require('morgan');
var CONTACT = require('../model/contact');
var jwt = require('jsonwebtoken');


exports.secure = async function (req, res, next) {
    try {
      let token = req.headers.authorization
      if (!token) {
        throw new Error("Please Attach token")
      }
      var decoded = jwt.verify(token, 'surat');
     
      let ConCheck = await CONTACT.findById(decoded.id);

      if (!ConCheck) {
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
  
exports.ConCreat = async function (req, res, next) {
    try {
        let contactCreate = await CONTACT.create(req.body)

        var token = jwt.sign({ id: contactCreate._id }, 'surat');
        
        res.status(201).json({
            status: "Success",
            message: "user Create Successfull",
            data: contactCreate,
            token
        })
    } catch
    (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ConFindAll = async function (req, res, next) {
    try {
        let token = req.headers.authorization
        
        if (!token) {
          throw new Error("Please Attach token")
        }
        var decoded = jwt.verify(token, 'surat');
        let contactAll = await CONTACT.findById(decoded.id).populate('user')
        res.status(200).json({
            status: "Success",
            message: "user Found Successfull",
            data: contactAll
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ConUpdate = async function (req, res, next) {
    try {
        console.log(token,"ss");
        
        let contactupdate = await CONTACT.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "contact update Successfull",
            data: contactupdate
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}
exports.ConDelete = async function (req, res, next) {
    try {
        let condelete = await CONTACT.findByIdAndDelete(req.params.id)
        if (!condelete) {
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