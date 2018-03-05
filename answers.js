// IN CURL

// CREATE
template: 
curl --data "name=FILLIN&type=FILLIN&cuisine=FILLIN" http://localhost:5000/api/soups

example:
curl --data "name=Miso&type=Ramen&cuisine=Japanese" http://localhost:5000/api/soups


// READ
http://localhost:5000/api/soups


// UPDATE 
template: 
curl -X PUT --data "name=FILLIN&type=FILLIN&cuisine=FILLIN" http://localhost:5000/api/soups/:id

example:
curl -X PUT --data "name=Shoyu&type=Ramen&cuisine=Japanese" http://localhost:5000/api/soups/1

// DELETE
template: 
curl -X DELETE http://localhost:5000/api/soupsdb/:id

example:
curl -X DELETE http://localhost:5000/api/soups/1


// psql
// Create database
CREATE DATABASE soupsdb;

// Create table
CREATE TABLE soups (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  type VARCHAR,
  cuisine VARCHAR
);

// Insert a row (Create)
INSERT INTO soups (name, type, cuisine)
  VALUES ('Tonkatsu', 'Ramen', 'Japanese');

// Insert more than 1 row (Create)
INSERT INTO soups (name, type, cuisine) VALUES
  ('Tonkatsu', 'Ramen', 'Japanese'),
  ('Yuzu', 'Ramen', 'Japanese'),
  ('Onion', 'Vegetable', 'French');

// Select all rows (Read)
SELECT * FROM soups;

// Update a row (Update)
UPDATE soups SET name='Shoyu', type='Ramen', cuisine='Japanese' where id=1;

// Delete a row (Delete)
DELETE FROM soups WHERE id =1;


//write down endpoints
CREATE
http://localhost:5000/api/soups/
READ
http://localhost:5000/api/soups/
UPDATE
http://localhost:5000/api/soups/:id
DELETE
http://localhost:5000/api/soups/:id
