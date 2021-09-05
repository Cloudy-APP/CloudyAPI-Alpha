const express = require('express')
const router = express.Router()

const actions = require('../actions/accounts')

router.get('/', actions.show)
router.post('/', actions.register)

module.exports = router
