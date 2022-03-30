import { Router } from 'express'
import * as stationTimingsCtrl from '../controllers/stationTimings.js'

const router = Router()

router.get('/', stationTimingsCtrl.index)
router.get('/get-times/:code', stationTimingsCtrl.metroApi)


export {
  router
}