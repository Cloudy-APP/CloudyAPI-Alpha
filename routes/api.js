const express = require('express')
const router = express.Router()

const actions = require('../actions/actions')

router.get('/accounts', actions.show)
router.post('/accounts', actions.register)

module.exports = router
