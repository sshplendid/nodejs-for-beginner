// app/fruits/router.js

const repository = require('./fruits');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const result = await repository.getAll();
  res.json({status:200, message: `successfully read!`, data: result});
});

router.post('/', (req, res) => {
  const fruit = req.body;
  repository.add(fruit);
  res.json({status:200, message: `successfully add a ${fruit.name}!`});
});


module.exports = router;
