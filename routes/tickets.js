import { Router } from 'express'
import { checkAuth, decodeUserFromTokem } from '../middleware/auth.js'
import * as ticketsCtrl from '../controllers/tickets.js'
const router = Router()

router.get('/', ticketsCtrl.index)
router.post('/', ticketsCtrl.create)

export {
  router
}