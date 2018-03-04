DROP DATABASE IF EXISTS soupsdb;
CREATE DATABASE soupsdb;

\c soupsdb;

CREATE TABLE soups (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  type VARCHAR,
  cuisine VARCHAR
);

INSERT INTO soups (name, type, cuisine)
  VALUES ('Tonkatsu', 'Ramen', 'Japanese');