import Category from './category.js'
const getCategories = async () => {
  return Category.getCategories()
}
const getRestaurants = async (id) => {
  return Category.getRestaurants(id)
}

export default {
  getCategories,
  getRestaurants,
}
