const User = require("../models/user");
exports.index = (req, res) => {
  User.find({})
    .then((users) => {
      res.render("users/index", { users: users });
    })
    .catch((err) => {
      console.log(`No utilisateurs : ${err.message}`);
      res.redirect("/");
    });
};

exports.new = (req, res) => {
  res.render("users/new");
};

exports.create = (req, res, next) => {
  let userParams = new User({
    name: {
      first: req.body.first,
      last: req.body.last,
    },
    email: req.body.email,
    password: req.body.password,
    zipCode: req.body.zipCode,
  });
  userParams.save((err, user) => {
    if (err) next(err);
    res.json(user);
    next();
  });
};
exports.show = (req, res, next) => {
  let userId = req.params.id;
  User.findById(userId, (err, user) => {
    if (err) next(err);
    console.log(user);
    res.render("users/show", { user: user });
  });
};
