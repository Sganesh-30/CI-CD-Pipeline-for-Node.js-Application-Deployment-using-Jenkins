const express = require('express');
const { fruits, vegetables, animals } = require('./data');

const app = express();
const port = 3000;

app.get('/fruits', (req, res) => {
  res.json(fruits);
});

app.get('/vegetables', (req, res) => {
  res.json(vegetables);
});

app.get('/animals', (req, res) => {
  res.json(animals);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
