/**
  WARNING: This is just a quick way to initiate a server that provides 1-2 endpoints. There needs to be an improvement by adding
  an ORM, a Data Access layer and maybe Nest.js as the main BE framework
**/

const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());


// Initiate postgres
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});
pgClient.on('error', () => console.log('Lost PG connection'));

/**
 * Initiate database if needed.
 * TODO: this should be moved into a seed file.
 */
pgClient
  .query('CREATE TABLE IF NOT EXISTS todos (id serial PRIMARY KEY, resolved BOOLEAN, title VARCHAR (500) NOT NULL, text VARCHAR (500) NOT NULL, comments json NOT NULL)')
  .catch(err => console.log(err));


/**
 * Greeter endpoint
 */
app.get('/', (req, res) => {
  res.send('This is the first version of my todo-app api');
});

/**
 * this is the todo getAll method
 */
app.get('/todos', async (req, res) => {
  const values = await pgClient.query('SELECT * from todos');

  res.send(values.rows);
});

/**
 * Create or Update a todo
 */
app.put('/todos', async (req, res) => {
  const {
    resolved,
    id,
    title,
    text,
    comments
  } = req.body;

  // TODO: check for bad request

  // TODO: check if todo already exists

  if(id) {
    pgClient.query('UPDATE todos SET (resolved, title, text, comments) = ($1, $2, $3, $4) WHERE id=$5', [
      resolved,
      title,
      text,
      comments,
      id
    ]);

  } else {
    pgClient.query('INSERT INTO todos(resolved, title, text, comments) VALUES($1, $2, $3, $4)', [
      resolved,
      title,
      text,
      comments
    ]);
  }
  res.send();
});

/**
 * Express initiator
 * Warning: Listen port should match with the defined port in /nginx/default.conf 
 */
app.listen(5000, err => {
  console.log('Listening');
});
