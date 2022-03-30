import { TimeTable } from '../models/timeTable.js'
import fetch from "node-fetch"

function index(req, res) {
  TimeTable.find({})
    .then(stationtimings => {
      res.json(stationtimings)
    })
    .catch(err => {
      res.json(err)
    })
}

function metroApi(req, res) {
  const BASE_URL = `https://api.wmata.com/Rail.svc/json/jStationTimes?=`

  fetch (`${BASE_URL}${req.params.code}&api_key=${process.env.API_KEY}`)
    .then(result => result.json()) 
    .then(data => res.json(data))
    .catch(err => {
      res.json(err)
    }) 
}

export {
  index,
  metroApi
}