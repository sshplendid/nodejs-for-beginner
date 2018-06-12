// app/users/router.js

const repository = require('./users');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({status:200, message: `successfully read!`, data: repository.getAll()});
});

router.post('/', (req, res) => {
  const user = req.body;
  repository.add(user);
  res.json({status:200, message: `successfully add a user!`});
});

router.get('/:name', (req, res) => {
  const name = req.params.name;
  const filtered = repository.getUsersByName(name);
  res.json({status:200, message: `successfully read users named ${name}`, data: filtered});
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const user = req.body;
  repository.update(id, user);

  res.json({status:200, message: `successfully update user has id ${id}`, data: user});
});


module.exports = router;
