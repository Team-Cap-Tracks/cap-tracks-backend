import mongoose from "mongoose"

const Schema = mongoose.Schema

const timeTableSchema = Schema({
    line: { type: mongoose.Schema.Types.ObjectId, ref: "Line" },
    dayOfWeek: String,
    firstTrain: Date,
    lastTrain: Date,
})