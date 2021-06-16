const User = require("../models/user");
exports.index = (req, res) => {
  User.find({})
    .then((users) => {
      res.render("users/index", { users: users });
    })
    .catch((err) => console.log(`No utilisateurs : ${err.message}`));
  res.redirect("/");
};

exports.new = (req, res) => {
  res.render("users/new")
}

exports.create = (req, res, next) => {
  let userParams = new User(req.body)
  userParams.save((err,user) => {
    if (err) next(err);
    res.json(user);
    next();
  })
}