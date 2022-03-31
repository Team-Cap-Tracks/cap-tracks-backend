import { Router } from 'express'
import { checkAuth, decodeUserFromTokem } from '../middleware/auth.js'
const router = Router()

export {
  router
}