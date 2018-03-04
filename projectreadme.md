#To setup this repository from scratch, here are the steps below:

In your terminal:
- yarn global add express-generator@4 

Add express server in terminal :
- express node-postgres-promises
- cd node-postgres-promises
- yarn install
- yarn pg-promise@5 --save
- yarn add bluebird@3 --save

# Create queries file
Create queries.js with these contents

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


# Create soups database
Create soups.sql with this command in terminal
- psql -f soupsdb.sql


# Modify app.js
Add error handling in file as shown.

# Experimenting with database and endpoints
Run server with
- yarn start


Now in new terminal type, to READ database contents, go to:
- http://localhost:5000/api/soupsdb


To insert into the database and view at http://localhost:5000/api/soupsdb, type in terminal:
- curl --data "name=Miso&type=Ramen&cuisine=Japanese" http://localhost:5000/api/soupsdb

To update into the database and view at http://localhost:5000/api/soupsdb, type in terminal:
curl -X PUT --data "name=Shoyu&type=Ramen&cuisine=Japanese" http://127.0.0.1:5000/api/soupsdb/1

To delete from the database and view at http://localhost:5000/api/soupsdb, type in terminal:
curl -X DELETE http://127.0.0.1:5000/api/soupsdb/1


# Postman software
3rd party exists where you can modify the database through them. An example I used is [Postman located here for download](https://www.getpostman.com/). In Postman, put in the URL http://127.0.0.1:5000/api/soups/ and experiment with the POST (CREATE), GET (READ), PUT (UPDATE), DEL (DELETE) methods. 

For example, POST is written in http://127.0.0.1:5000/api/soups/ and added as JSON data shown below. If post works, status of successful will output.

{
    "id": 1,
    "name": "Tonkatsu",
    "type": "Ramen",
    "cuisine" : "Japanese"
 
}