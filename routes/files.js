const app = require('express')
const express = require('express')
const router = express.Router()
const multer = require('multer')

const actions = require('../actions/files')

const upload = multer({
    dest: './uploads/',
    limits: {
        filesize: 50000000
    }
})

router.post('/upload', upload.array('files'), (req, res) => {
    res.json({files: req.files});
})


module.exports = router
