var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/soups', db.getAllSoups);   //read all soups
router.get('/api/soups/:id', db.getSingleSoup); //read a single soup
router.post('/api/soups', db.createSoup); //insert a soup
router.put('/api/soups/:id', db.updateSoup);  //update a soup
router.delete('/api/soups/:id', db.removeSoup); //remove a soup


module.exports = router;
