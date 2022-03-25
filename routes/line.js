import { Router } from 'express'
import * as linesCtrl from '../controllers/line.js'
const router = Router()

router.get('/', linesCtrl.index)

export {
  router
}