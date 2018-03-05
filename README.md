# simpleDbMeetup
This repository is for the Simple Database meetup I held in Tokyo on March 7, 2018.

# Slides
Slides are located here:
- [Presentation Slides](https://docs.google.com/presentation/d/1P63P8huCBeYhiGeZRqEYLoaQHflJwhdjqpnZWbGAnrs/edit?usp=sharing)

# Setup Postgres(PG) Structured Query Language (SQL)

First make sure you have node and yarn or npm package manager installed. If you don't, please go to their documentation in #Resources.

Now, first git clone this repository from github at [this link](https://github.com/eliaahadi/simpleDbMeetup.git).

Now in the directory of the cloned folder, link dependencies by typing in terminal: 
- yarn install

# Run PG
In terminal, type:
- psql -f soupsdb.sql

# Run Web server
In terminal, type:
- yarn start

# Basic Tasks in PSQL

## Create database
CREATE DATABASE soupsdb;

## Create table
CREATE TABLE soups (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  type VARCHAR,
  cuisine VARCHAR
);

## Insert a row (Create)
INSERT INTO soups (name, type, cuisine)
  VALUES ('Tonkatsu', 'Ramen', 'Japanese');

## Select all rows (Read)
SELECT * FROM soups;

## Update a row (Update)
UPDATE soups SET name='Shoyu', type='Ramen', cuisine='Japanese' WHERE id=1;

## Delete a row (Delete)
DELETE FROM soups WHERE id =1;

# Advanced Tasks
View [here for more PSQL functions](https://www.tutorialspoint.com/postgresql/index.html).

# Resources
- [Yarn Package Manager](https://yarnpkg.com/en/docs/install)
- [Node.JS](https://nodejs.org/en/download/package-manager/)
- [PSQL docs](https://www.postgresql.org/docs/9.6/static/index.html)
- [PSQL tutorial](http://www.postgresqltutorial.com/)
- [StackOverflow](https://stackoverflow.com/)
- [Node & PG Integration Tutorial](http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/)

# Contact Information
- [LinkedIn](https://www.linkedin.com/in/eliaahadi/)