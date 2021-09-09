// libs
const express = require('express')
const history = require('connect-history-api-fallback');
const cors = require('cors')

const app = express()
const { port } = require('./config/config')

require('./database/mongoose')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.options('*', cors())

const apirouter = require('./routes/api')
app.use('/api', apirouter)

// frontend-routing
app.use(history());
app.use(express.static(__dirname + "/static"));

// listening
app.listen(port, (err) => {
    console.log('API: http://localhost:' + port)
})