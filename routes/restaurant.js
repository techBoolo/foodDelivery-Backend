import express from 'express'
import restaurantController from '../controllers/restaurant.js'

const router = express.Router()

router.route('/:id/menus')
  .get(restaurantController.menus)

export default router
