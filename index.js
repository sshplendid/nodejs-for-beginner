// index.js

const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./app/users');
const fruitsRouter = require('./app/fruits');

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

app.use('/users', usersRouter);
app.use('/fruits', fruitsRouter);


app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(`500 Server broken!`);
});

app.listen(port, err => {
  if(err) return console.error('Failed to start Server... Something happened!');

  console.log(`Server is running at ${port}`);
})
