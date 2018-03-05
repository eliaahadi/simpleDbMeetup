DROP DATABASE IF EXISTS soupsdb;
CREATE DATABASE soupsdb;

\c soupsdb;

CREATE TABLE soups (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  type VARCHAR,
  cuisine VARCHAR
);

INSERT INTO soups (name, type, cuisine)
  VALUES ('Tonkotsu', 'Ramen', 'Japanese');