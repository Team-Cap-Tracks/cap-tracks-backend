import { TimeTable } from '../models/timeTable.js'

function index(req, res) {
  TimeTable.find({})
    .then(stationtimings => {
      res.json(stationtimings)
    })
    .catch(err => {
      res.json(err)
    })
}

export {
  index
}