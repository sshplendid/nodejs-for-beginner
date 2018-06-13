// db/pg.spec.js

const pool = require('./pg');

(async function () {
  const res = await pool.query('SELECT $1::text as message', ['dabatabase connected!']);
  console.log(res.rows[0].message);
  const res2 = await pool.query('SELECT $1::text as message', ['Hello World!']);
  console.log(res2.rows[0].message);
})();
