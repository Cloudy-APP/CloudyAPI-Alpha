const path = require('path')
const multer = require('multer')

const makeid = require('../methods/makeid')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'static/files/')
    },
    filename: (req, file, cb) => {
      const name = makeid(12) + path.extname(file.originalname)
      cb(null, name)
    }
})

module.exports = storage