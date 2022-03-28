import { TimeTable } from '../models/timeTable.js'

function index() {
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