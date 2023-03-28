import express from 'express'
import categoryController from '../controllers/category.js'

const router = express.Router()

router.route('/')
  .get(categoryController.index)

router.route('/:id/restaurants')
  .get(categoryController.restaurants)

export default router
