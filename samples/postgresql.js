'use strict';
(async function() {
  const { Client } = require('pg');
  // const connectionString = `postgresql://postgres:admin@localhost:5432/node_hero`;
  const connectionString = 'postgresql://postgres:admin@localhost:5432/node_hero';
  const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'node_hero',
    password: 'admin',
    port: 5432
  };
  const client = new Client(config);

  await client.connect();

  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res.rows[0].message);
  await client.end();
})();
