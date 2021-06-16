const express = require("express");
const app = express();

const homeController = require("./controllers/homeController")
const port = 4000;

app.use((req, res, next) => {
  console.log(`l'url est : ${req.url}`);
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("La méthode POST à fonctionnée!");
});

app.get("/", (req, res) => {
  res.send("Hello, Universe!");
});
app.get("/contacts", (req, res) => {
  res.send("Les informations ont bien été envoyés avec succès");
});
app.get("/items/:legumes",homeController.sendReqParams);

// console.log(req.params)
// console.log(req.body)
// console.log(req.url)
// console.log(req.query)

app.listen(port, () => console.log(`Le seveur ecoute sur le port :${port}`));
