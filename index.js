// index.js

const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./app/users/index');

// request body parser
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  // console.log(req.body);
  next();
});

app.use((req, res, next) => {
  req.chance = Math.random();
  next();
});



app.get('/', (req, res) => {
  res.send('Hello Node.js');
});

app.get('/random', (req, res) => {
  res.json({chance: req.chance});
});

app.get('/error', (req, res) => {
  throw new Error(`Oops!`);
});

app.use('/users', usersRouter);

/*
const users = [];
users.push({id: 1, name: 'Jim', age: 20});
users.push({id: 2, name: 'Kate', age: 30});
users.push({id: 3, name: 'Larry', age: 40});

app.get('/users', (req, res) => {
  res.json({status:200, message: `successfully read!`, data: users});
});

app.post('/users', (req, res) => {
  const user = req.body;
  if(!user.name || !user.age) throw new Error(`Broken data!`);
  users.push({id: users.length + 1, name:user.name, age:user.age});
  res.json({status:200, message: `successfully add a user!`});
});

app.get('/users/:name', (req, res) => {
  const name = req.params.name;
  const filtered = users.filter(u => u.name === name);
  res.json({status:200, message: `successfully read users named ${name}`, data: filtered});
});

app.put('/users/:id', (req, res) => {
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
*/


app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(`500 Server broken!`);
});

app.listen(port, err => {
  if(err) return console.error('Something happened');

  console.log(`Server is running at ${port}`);
})
