const express = require('express')
const router = express.Router()

const actions = require('../actions/actions')

router.get('/', actions.register)

module.exports = router