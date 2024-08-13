var express = require('express');
var USERS = require('../model/contact/user');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('users', { title: 'Express' });
});

router.post('/signup', async function (req, res, next) {

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
});

router.get('/find', async function (req, res, next) {
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
});

router.post('/login', async function (req, res, next) {
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
});

router.delete('/:id', async function (req, res, next) {
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
});

router.patch('/:id', async function (req, res, next) {
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
});

module.exports = router;