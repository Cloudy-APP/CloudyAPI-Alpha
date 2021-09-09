const multer = require('multer')
const storage = require('./storage')

const upload = multer({ storage: storage, limits: { filesize: 50000000 } });

module.exports = upload