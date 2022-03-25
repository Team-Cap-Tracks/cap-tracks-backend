import mongoose from "mongoose"

const lineSchema = new mongoose.Schema({
  line: String,
  stations: [{
    Code: String,
    Name: String,

  }]
})