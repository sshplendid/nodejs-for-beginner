// app/fruits/fruit.spec.js

const fruits = require('./fruits');

const strawberry = {name: 'strawberry', color: 'red'};
const orange = {name: 'orange', color: 'orange'};

async function getAllTest() {
  const data = await fruits.getAll();
  console.log('getAll Test => ');
  console.log(data);
  // data.forEach(d => console.log(d.name));
}

async function getFruitsByIdTest() {
  const data = await fruits.getFruitsById(1);
  console.log('getFruitsByIdTest =>');
  console.log(data);
}

async function addTest() {
  const data = await fruits.add(strawberry);
  console.log('addTest =>');
  console.log(data);
}
getAllTest();
getFruitsByIdTest();
addTest();
