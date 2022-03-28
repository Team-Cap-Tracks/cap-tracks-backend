import mongoose from "mongoose"

const Schema = mongoose.Schema

const timeTableSchema = Schema({
    station: { type: String, ref: "Code" },
    Monday: [{
      OpeningTime: String,
      FirstTrain: [{
        Time: String,
        DestinationStation: String
      }, {
      Time: String,
      DestinationStation: String
    }],
    LastTrain: [{
      Time: String,
      DestinationStation: String,
    }, {
      Time: String,
      DestinationStation: String,
    }]
    }],
    Tuesday: [{
      OpeningTime: String,
      FirstTrain: [{
        Time: String,
        DestinationStation: String
      }, {
      Time: String,
      DestinationStation: String
    }],
    LastTrain: [{
      Time: String,
      DestinationStation: String,
    }, {
      Time: String,
      DestinationStation: String,
    }]
    }],
    Wednesday: [{
      OpeningTime: String,
      FirstTrain: [{
        Time: String,
        DestinationStation: String
      }, {
      Time: String,
      DestinationStation: String
    }],
    LastTrain: [{
      Time: String,
      DestinationStation: String,
    }, {
      Time: String,
      DestinationStation: String,
    }]
    }],
    Thursday: [{
      OpeningTime: String,
      FirstTrain: [{
        Time: String,
        DestinationStation: String
      }, {
      Time: String,
      DestinationStation: String
    }],
    LastTrain: [{
      Time: String,
      DestinationStation: String,
    }, {
      Time: String,
      DestinationStation: String,
    }]
    }],
},{
  timestamp: true
})

const TimeTable = mongoose.model('TimeTable', timeTableSchema)

export {
  TimeTable
}