const mongoose = require('mongoose'),
{ Schema } = mongoose,
 const courseSchema = new Schema({
   title: { 
     type: String,
     required: true, 
     unique: true
   },
   description: {
     type: String, 
     required:true
   },
   items: [],
   zipCode: {
    type: Number,
        min: [1000, "Le code postal est trop court"],
        max: 99999,
   }
 })

 module.exports = mongoose.model('Course', courseSchema)