const express = require("express");
const app = express();

const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const port = 4000;

app.use((req, res, next) => {
  console.log(`l'url est : ${req.url}`);
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "pug");
app.set("views", "./views");
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("La méthode POST à fonctionnée!");
});

app.get("/", (req, res) => {
  res.send("Bienvenue dans notre couizine");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showContact);
app.get("/thanks", homeController.showThanks);

app.use(errorController.respondNoResourceFound);

app.listen(port, () =>
  console.log(`Le serveur tourne sur http://localhost:${port}`)
);
