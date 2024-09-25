var product = require('../model/product');
const multer = require('multer')

// for file upload (multer)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname) //file.originalname for file type(.png, .jpg, .mp4)
    }
})

exports.upload = multer({ storage: storage })

exports.productCreate = async function (req, res, next) {
    try {

        req.body.images = req.files.map(file => file.filename);

        let productCreate = await product.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "product Create Successfull",
            data: productCreate,
        })
    } catch
    (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.productFind = async function (req, res, next) {
    try {
        let productdata = await product.find().populate('category')

        res.status(200).json({
            status: "Success",
            message: "product Found Successfull",
            data: productdata
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.productUpdate = async function (req, res, next) {
    try {
        let productupdate = await product.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "product update Successfull",
            data: productupdate
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.productDelete = async function (req, res, next) {
    try {
        let productdelete = await product.findByIdAndDelete(req.params.id)
        if (!productdelete) {
            res.status(900).json({
                status: "Error",
                message: "product Not Found",
            })
        } else {
            res.status(200).json({
                status: "Success",
                message: "product delete Successfull",
            })
        }
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message,
        })
    }
}