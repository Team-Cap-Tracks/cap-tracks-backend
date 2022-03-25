import mongoose from "mongoose"

const lineSchema = new mongoose.Schema({
  line: String,
  stations: [{
    Code: String,
    Name: String,
    StationTogether1: String,
    StationTogether2: String,


  }]
})