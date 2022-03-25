import { Line } from '../models/line.js'

function index(req, res) {
  Line.find({})
    .then(line => {
      res.json(line)
    })
    .catch(err => {
      res.json(err)
    })
}

export {
  index,
}