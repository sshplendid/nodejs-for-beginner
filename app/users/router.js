// app/users/router.js

const express = require('express');
const router = express.Router();

const users = [];
users.push({id: users.length + 1, name: 'Jim', age: 20});
users.push({id: users.length + 1, name: 'Kate', age: 30});
users.push({id: users.length + 1, name: 'Larry', age: 40});

router.get('/', (req, res) => {
  res.json({status:200, message: `successfully read!`, data: users});
});

router.post('/', (req, res) => {
  const user = req.body;
  if(!user.name || !user.age) throw new Error(`Broken data!`);
  users.push({id: users.length + 1, name:user.name, age:user.age});
  res.json({status:200, message: `successfully add a user!`});
});

router.get('/:name', (req, res) => {
  const name = req.params.name;
  const filtered = users.filter(u => u.name === name);
  res.json({status:200, message: `successfully read users named ${name}`, data: filtered});
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const tobe = req.body;
  users.map(u => {
    if(u.id == id) {
      u.name = tobe.name;
      u.age = parseInt(tobe.age);
    }
  });

  res.json({status:200, message: `successfully update user has id ${id}`, data: users.filter(u => u.id == id)});
});


module.exports = router;
