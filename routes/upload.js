const app = require('express')
const path = require('path')
const express = require('express')
const router = express.Router()
const multer = require('multer')

const actions = require('../actions/files')

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'static/files/')
    },
    filename: function (req, file, cb) {
      const name = makeid(12) + path.extname(file.originalname)
      cb(null, name) //Appending extension
    }
  })
  
var upload = multer({ storage: storage, limits: { filesize: 50000000 } });

router.post('/upload', upload.array('files'), async (req, res) => {
    res.json({files: req.files});
})


module.exports = router
