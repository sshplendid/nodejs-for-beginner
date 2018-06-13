// app/fruits/fruits.js

const pool = require('../../db');

function toFruit(r) {
  return {id: r.id, name: r.name, color: r.color};
}

var repository = {
  getAll: async function() {
    const sql = `select * from fruit;`;

    const result = await pool.query(sql);
    // result.rows.map(r => console.log(`${r.id} ${r.name} ${r.color}`));

    return result.rows.map(r => toFruit(r));
  },
  getFruitsById: async function(id) {
    const sql = `select * from fruit where id=$1;`;
    const result = await pool.query(sql, [id]);

    return result.rows.map(r => toFruit(r));
  },
  add: async function(fruit) {
    if(!fruit.name || !fruit.color) throw new Error(`Broken data!`);

    const sql = `insert into fruit (id, name, color) values (nextval('fruit_seq'), $1, $2);`;
    const result = await pool.query(sql, [fruit.name, fruit.color]);

    return result;
  },
  update: async function(id, fruit) {
    if(!fruit.name || !fruit.color) throw new Error(`Broken data!`);

    const sql = `update fruit set color = $1 where name = $2`;
    const result = await pool.query(sql, [fruit.color, fruit.name]);

    return result;
  }
};


module.exports = repository;
