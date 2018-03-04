in terminal:

- yarn global add express-generator@4 

add express server in terminal 

- express node-postgres-promises
- cd node-postgres-promises
- yarn install

- yarn pg-promise@5 --save
- yarn add bluebird@3 --save

- create queries.js with these contents

var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/soups';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllSoups: getAllSoups,
  getSingleSoup: getSingleSoup,
  createSoup: createSoup,
  updateSoup: updateSoup,
  removeSoup: removeSoup
};


- create soups.sql

run this command in terminal
psql -f soupsdb.sql

- yarn start

in new terminal type:

GET
http://localhost:5000/api/soupsdb
INSERT
curl --data "name=Miso&type=Ramen&cuisine=Japanese" http://localhost:5000/api/soupsdb

UPDATE
curl -X PUT --data "name=Shoyu&type=Ramen&cuisine=Japanese" http://127.0.0.1:5000/api/soupsdb/1

DELETE
curl -X DELETE http://127.0.0.1:5000/api/soupsdb/1

in postman

POST
http://127.0.0.1:5000/api/soups/

{
    "id": 1,
    "name": "Tonkatsu",
    "type": "Ramen",
    "cuisine" : "Japanese"
 
}