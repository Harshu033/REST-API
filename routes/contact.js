var express = require('express');
var CONTACT = require('../model/contact/contact');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.post('/create', async function (req, res, next) {
    try {
        let contactCreate = await CONTACT.create(req.body)
        res.status(201).json({
            status: "Success",
            message: "user Create Successfull",
            data: contactCreate
        })
    } catch
    (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

});

router.get('/showAll', async function (req, res, next) {
    try {
        let contactAll = await CONTACT.find()
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
});

router.patch('/:id', async function (req, res, next) {
    try {
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
});

router.delete('/:id', async function (req, res, next) {
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
});

module.exports = router;
