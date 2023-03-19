import express from 'express'
import categoryController from '../controllers/category.js'

const router = express.Router()

router.route('/')
  .get(categoryController.index)

export default router
