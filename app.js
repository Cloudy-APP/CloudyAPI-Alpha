// libs
const express = require('express')
const path = require('path');
const history = require('connect-history-api-fallback');

// consts
const app = express()
const { port } = require('./config/config')

// database
require('./database/mongoose')

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api-routing
const accrouter = require('./routes/accounts')
app.use('/api/accounts', accrouter)
const filesrouter = require('./routes/files')
app.use('/api/files', filesrouter)

// frontend-routing
app.use(history());
app.use(express.static(__dirname + "/static"));

// listening
app.listen(port, (err) => {
    console.log('API: http://localhost:' + port)
})