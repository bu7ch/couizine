const mongoose = require('mongoose');
const Schema = mongoose.Schema


const subscriberSchema = new Schema({
  // name: String,
  // email: String,
  // zipCode: Number,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  zipCode: {
    type: Number,
    min: [1000, "Zip code too short"],
    max: 99999
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
})

const Subscriber = mongoose.model('Subscriber', subscriberSchema)

module.exports = Subscriber;