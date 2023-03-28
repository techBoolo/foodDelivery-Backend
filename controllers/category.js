import Category from '../models/category_dao.js'

const index = async (req, res) => {
  const categories = await Category.getCategories()
  res.status(200).json(categories)
}

const restaurants = async (req, res) => {
  const { id } = req.params
  const result = await Category.getRestaurants(id)
  res.status(200).json(result)
}

export default {
  index,
  restaurants,
}
