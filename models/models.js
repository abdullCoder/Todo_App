const mongoose = require('mongoose')

const Schema  = mongoose.Schema

const flightSchema = new Schema({
  title:{
    type: String,
    require: true
  },
  time:{
    type: Number,
    require: true
  },
  price:{
    type: Number,
    require: true
  },
  date:{
    type: String,
    require: true
  },

},)

const flight = mongoose.model('1stflight', flightSchema)

module.exports = flight