// index.js

const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
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

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(`500 Server broken!`);
});

app.listen(port, err => {
  if(err) return console.error('Something happened');

  console.log(`Server is running at ${port}`);
})
