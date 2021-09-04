const mongoose = require('mongoose')

const Account = mongoose.model('Account', {
    username: String,
    password: String,
    email: String
})

module.exports = Account