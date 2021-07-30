var express = require('express');
var router = express.Router();
const {index, about, music, contact} = require('../controllers/indexController')

/* GET home page. */
router.get('/', index);
router.get('/about', about);
router.get('/music', music);
router.get('/contact', contact);

module.exports = router;
