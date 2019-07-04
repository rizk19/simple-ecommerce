var express = require('express');
var router = express.Router();
var multer = require('multer')
const storage = multer.diskStorage({

    destination: "./public/uploads/",
    filename:
        function (req, file, cb) {
            cb(
                null, "IMAGE-" + Date.now() + path.extname(file.originalname));
        }
});

var upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
}).single(
    "myImage");

router.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        console.log('request ---', req.body)
        console.log('request file ---', req.file);

        if (!err) { return res.send(200).end() }

    })
})



module.exports = router
