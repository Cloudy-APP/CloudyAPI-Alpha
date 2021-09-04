require('dotenv').config()

module.exports = {
    port: process.env.PORT || 80,
    database: process.env.DATABASE
}