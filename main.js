const express = require("express");
const app = express();
const mongoose = require("mongoose")
dbURL = "mongodb://localhost/"
dbName = 'couizine_db'

mongoose.Promise = global.Promise
mongoose.connect(dbURL+dbName, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log(`MongoDB connected !!`))
  .catch(err => console.error(err))

const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const subscriberControlller = require("./controllers/subscriberController")
const userController = require("./controllers/userController")
const port = 4000;

app.use((req, res, next) => {
  console.log(`l'url est : ${req.url}`);
  next();
});
app.use(express.static('public'))
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
app.get("/subscribers/", subscriberControlller.getAllSubscribers)
app.get("/subscribers/new", subscriberControlller.subscriberPage)
app.post("/subscribers/create", subscriberControlller.postSubscribers)
app.get('/users', userController.index)
app.get('/users/new', userController.new)
app.post('/users/create', userController.create)
app.get('/users/:id', userController.show)

app.use(errorController.respondNoResourceFound);

app.listen(port, () =>
  console.log(`Le serveur tourne sur http://localhost:${port}`)
);
