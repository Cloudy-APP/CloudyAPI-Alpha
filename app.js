// libs
const express = require('express')
const path = require('path');
const history = require('connect-history-api-fallback');

// consts
const app = express()
const { port } = require('./config/config')

// database
require('./database/mongoose')

// api-routing
const apiRouter = require('./routes/api')
app.use('/api', apiRouter)

// frontend-routing
app.use(history());
app.use(express.static(__dirname + "/static"));

// listening
app.listen(port, (err) => {
    console.log('API: http://localhost:' + port)
})