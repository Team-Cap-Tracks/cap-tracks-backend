import { Ticket } from '../models/user.js'

function index(req, res) {
  Ticket.find({})
  .populate('owner')
  .then(tickets => {
    res.json(tickets)
  })
  .catch(err => {
    res.json(err)
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  Ticket.create(req.body)
  .then(ticket => {
    ticket.populate('owner')
    .then(populatedTicket => {
      res.json(populatedTicket)
    })
  })
  .catch(err => res.json(err))
}

function deleteTicket(req, res) {
  Ticket.findByIdAndDelete(req.params.id)
  .then(ticket => res.json(ticket))
  .catch(err => res.json(err))
}

export {
  index,
  create,
  deleteTicket as delete,
}