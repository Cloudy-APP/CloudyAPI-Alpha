const express = require('express')
const router = express.Router()

const actions = require('../actions/files')

router.post('/', actions.show)

module.exports = router
