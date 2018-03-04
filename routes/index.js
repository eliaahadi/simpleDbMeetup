var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/soupsdb', db.getAllSoups);
router.get('/api/soupsdb/:id', db.getSingleSoup);
router.post('/api/soupsdb', db.createSoup);
router.put('/api/soupsdb/:id', db.updateSoup);
router.delete('/api/soupsdb/:id', db.removeSoup);


module.exports = router;
