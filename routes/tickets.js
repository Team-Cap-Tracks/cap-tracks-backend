import { Router } from 'express'
import { checkAuth, decodeUserFromToken } from '../middleware/auth.js'
import * as ticketsCtrl from '../controllers/tickets.js'
const router = Router()

router.get('/', ticketsCtrl.index)
router.use(decodeUserFromToken)

router.post('/', checkAuth, ticketsCtrl.create)
router.delete('/:id', checkAuth, ticketsCtrl.delete)

export {
  router
}