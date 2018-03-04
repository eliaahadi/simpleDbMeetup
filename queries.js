var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/soupsdb';
var db = pgp(connectionString);

// add query functions
function getAllSoups(req, res, next) {
  db.any('select * from soups')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL soups'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleSoup(req, res, next) {
  var soupID = parseInt(req.params.id);
  db.one('select * from soups where id = $1', soupID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE soup'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createSoup(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into soups(name, type, cuisine)' +
      'values(${name}, ${type}, ${cuisine})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one soup'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateSoup(req, res, next) {
  db.none('update soups set name=$1, type=$2, cuisine=$3 where id=$4',
    [req.body.name, req.body.type, req.body.cuisine, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated soup'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeSoup(req, res, next) {
  var soupID = parseInt(req.params.id);
  db.result('delete from soups where id = $1', soupID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} soup`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllSoups: getAllSoups,
  getSingleSoup: getSingleSoup,
  createSoup: createSoup,
  updateSoup: updateSoup,
  removeSoup: removeSoup
};