
const mongoose = require("mongoose"),
  { Schema } = mongoose,
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
      courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
      SubscriberAccount: { type: Schema.Types.ObjectId, ref: "Subscriber" },
    },
    { timestamps: true }
  );

userSchema.virtual("fullname").get(function () {
  return `${this.name.first} ${this.name.last}`;
});

mmodule.exports = mongoose.model("User", userSchema);
