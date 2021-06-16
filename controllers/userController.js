const User = require("../models/user");
exports.index = (req, res) => {
  User.find({})
    .then((users) => {
      res.render("users", { users: users });
    })
    .catch((err) => console.log(`No utilisateurs : ${err.message}`));
  res.redirect("/");
};
