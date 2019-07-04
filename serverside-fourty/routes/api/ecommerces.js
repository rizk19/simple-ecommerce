var express = require('express');
var router = express.Router();
var Image = require('../../models/image')
var Ecommerce = require('../../models/ecommerce')
var multer = require('multer')

/* GET users listing. */
router.get('/', function (req, res, next) {
    Ecommerce.find({}, (err, data1) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data1)
    })
});

router.post('/', (req, res, next) => {
    let cart = {}
    if (req.body.id && req.body.title) {
        cart.id = req.body.id
        cart.title = req.body.title
    }
    if (req.body.rate) {
        cart.rate = parseFloat(req.body.rate)
    }
    if (req.body.desc) {
        cart.desc = req.body.desc
    }
    if (req.body.price) {
        cart.price = req.body.price
    }
    if (req.body.brand) {
        cart.brand = req.body.brand
    }
    if (req.body.detail) {
        cart.detail = req.body.detail
    }
    if (req.body.image) {
        cart.image = req.body.image
    }
    Ecommerce.create(cart, (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(201).json({
            status: "SUCCESS", message: "new item has been added",
            data: { id: data.id, title: data.title, rate: data.rate, desc: data.desc, price: data.price, brand: data.brand, detail: data.detail, image: data.image }
        })
    })
})

router.delete('/:id', (req, res, next) => {

    Ecommerce.findOneAndDelete({ id: req.params.id }, (err, deleted) => {
        if (err) return res.status(401).json({ status: "FAILED", message: "delete failed" })
        return res.status(201).json({
            status: "SUCCESS", message: "item has been deleted",
            data: {
                _id: deleted._id,
                id: deleted.id, title: deleted.title, rate: deleted.rate, desc: deleted.desc, price: deleted.price, brand: deleted.brand, detail: deleted.detail
            }
        })
    })
})

const storage = multer.diskStorage({

    destination: "./public/uploads/",
    filename:
        function (req, file, cb) {
            cb(null, "IMAGE-" + Date.now() + ".jpg");
        }
});

var upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
}).single("image");

router.post('/upload', function (req, res) {
    upload(req, res, async function (err) {
        
        console.log('request file ---', req);
        const newData = new Image({image: req.file.filename})
        console.log('request ---', req.body)
        try {
            let data = await newData.save();
            res.status(201).send(data)
        } catch (error) {
            res.status(400).send(error)
        }
    })
})

module.exports = router;
