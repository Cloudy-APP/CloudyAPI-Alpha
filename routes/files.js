const express = require('express')
const router = express.Router()
const multer = require('multer')

const actions = require('../actions/files')

const upload = multer({
    dest: './uploads/'
})

router.post('/upload', upload.single('file'), (req, res) => {
    res.json({file: req.file});
})

module.exports = router
