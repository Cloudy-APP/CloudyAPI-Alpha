const express = require('express')
const router = express.Router()
const actions = require('../actions/files')
const upload = require('../multer/upload')

router.post('/files/upload', upload.array('files'), actions.upload)


module.exports = router
