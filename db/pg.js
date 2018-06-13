// db/pg.js

'use strict';

const {Pool} = require('pg');
const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'node_hero',
  password: 'admin',
  port: 5432
};

const pool = new Pool(config);
module.exports = {query: (sql, params) => pool.query(sql, params)};
