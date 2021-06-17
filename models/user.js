const mongoose = require("mongoose"),
  { Schema } = mongoose,
  bcrypt = require("bcryptjs"),
  Subscriber = require("./subscriber");
userSchema = new Schema(
  {
    name: {
      first: { type: String, trim: true },
      last: { type: String, trim: true },
    },
    email: { type: String, required: true, lowercase: true, unique: true },
    zipCode: {
      type: Number,
      min: [1000, "Le code postal est trop court"],
      max: 99999,
    },
    password: { type: String, required: true },
    subscribedAccount: {
      type: Schema.Types.ObjectId,
      ref: "Subscriber",
    },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);

userSchema.virtual("fullname").get(function () {
  return `${this.name.first} ${this.name.last}`;
});

userSchema.pre("save", function (next) {
  let user = this;
  bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
      next();
    })
    .catch((err) => {
      console.log(`Erreur de hashage :${err.message}`);
      next(err);
    });
});

userSchema.methods.passwordCompare = function(inputPassword){
  let user = this;
  return bcrypt.compare(inputPassword, user.password);
};

userSchema.pre("save", function (next) {
  let user = this;
  if (user.subscribedAccount === undefined) {
    Subscriber.findOne({
      email: user.email,
    })
      .then((subscriber) => {
        user.subscribedAccount = subscriber;
        next();
      })
      .catch((error) => {
        console.log(`Erreur sur l'inscrit: ${error.message}`);
        next(error);
      });
  } else {
    next();
  }
});

module.exports = mongoose.model("User", userSchema);
