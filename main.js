const express = require('express');
const app = express();

const port = 4000;


app.get('/', (req, res) => {
  res.send('Hello, Universe!');
})


app.listen(port, () => console.log(`Le seveur ecoute sur le port :${port}`))