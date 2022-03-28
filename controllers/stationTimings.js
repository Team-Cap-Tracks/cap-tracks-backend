import { TimeTable } from '../models/timeTable.js'

function index(req, res) {
  TimeTable.find({})
    .then(time => {
      res.json(time)
    })
    .catch(err => {
      res.json(err)
    })
}

export {
  index
}