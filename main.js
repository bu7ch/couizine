const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello, Universe!");
});
app.get("/contacts", (req, res) => {
  res.send("Les informations ont bien été envoyés avec succès");
});
app.get("/items/:legumes", (req, res) => {
  res.send(req.params.legumes);
});

app.use((req, res, next) => {
  console.log(`la requête est donné : ${req.url}`);
  next();
});

// console.log(req.params)
// console.log(req.body)
// console.log(req.url)
// console.log(req.query)

app.listen(port, () => console.log(`Le seveur ecoute sur le port :${port}`));
