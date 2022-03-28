import { TimeTable } from '../models/timeTable.js'

function index(req, res) {
  TimeTable.find({})
    .then(line => {
      res.json(line)
    })
    .catch(err => {
      res.json(err)
    })
}

export {
  index
}